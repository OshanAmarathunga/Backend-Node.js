import User from "../model/UserSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;

export async function signup(req, res) {
  const { username, password, fullName, role } = req.body;
  const userExist = await User.findOne({ username: username });

  if (userExist) {
    return res.status(400).json({
      message: "Username is already exist",
    });
  }
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = bcryptjs.hash(password, salt);
  const newUser = new User({
    username,
    password: hashedPassword,
    fullName,
    role,
    isActive: true,
  });

  const savedUser = await newUser.save();

  res.status(200).json({
    message: "User signup complete",
    data: savedUser,
  });

  try {
  } catch (e) {
    res.status(500).json({
      errorMessage: e.message,
    });
  }
}

export async function login(req, res) {
  const { username, password } = req.body;
  const userExist = await User.findOne({ username: username });

  if (!userExist) {
    return res.status(400).json({
      message: "Username is already exist",
    });
  }

  const isMatch = await bcryptjs.compare(password, userExist.password);
  if (!isMatch) {
    return res.status(403).json({
      message: "Wrong password",
    });
  }

  const payload={
    userId:userExist._id,
    username:userExist.username,
    role:userExist.role
  }

  const token =jwt.sign(payload,JWT_SECRET,{expiresIn:'1h'} );
  return res.status(200).json({
    message:"Login success !",
    data:{
      token:token  
    }
  })
}
