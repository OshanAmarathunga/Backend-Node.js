import jwt from 'jsonwebtoken'
import User from '../model/UserSchema.js';
const verifyToken=(requiredRoles=[])=>{
    return async (req,res,next)=>{
        try{
            const token =req.headers['authorization']?.split('')[1];
            if(!token){
                return res.status(403).json({
                    message:'Access Denied, no token provided!'
                })
            }
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            req.user=decoded;

            const user=User.findOne({username:decoded.username});
            if(!user){
                return res.status(403).json({
                    message:"User not found !"
                })
            }

            if(requiredRoles.length && !requiredRoles.includes[user.role]){
                return res.status(403).jsob({
                    message:"Role was not ok,you have not access !"
                })
            }

            next();

        }catch(e){
            if(e.name==='JsonWebTokenError'){
                return res.status(401).json({
                    message:"Invalid token"
                })
            }else if(e.name==='TokenExpiredError'){
                return res.status(401).json({
                    message:"Token has expired!"
                })
            }
            return res.status(401).json({
                message:"Internal server error!"
            })
        }
    }
}

export default verifyToken;