import jwt from 'jsonwebtoken'

const cretaeToken=(payLoad,secret,expireIn)=>{
    return jwt.sign(payLoad,secret ,{expiresIn});

}

const verifyToken=(token,secret)=>{
    return jwt.verify(token,secret)
}


export const JwtVerify={
    cretaeToken,
    verifyToken
}