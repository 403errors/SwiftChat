import jwt from 'jsonwebtoken';

export const generateToken = (userId, res) => {
    // generating a token
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn:"7d"
    })

    // sending it to the user in a cookie
    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in ms
        httpOnly: true, // prevent XSS attacks cross-site scripting attacks
        sameSites: "strict",  // CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV != "development"
    })

    return token
}