import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt   // .cookies are added by cookie parser middleware

        if (!token) {
            return res.status(401).json({message: "Unauthorised - No Token Provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (!decoded) {
            return res.status(401).json({ message: "Unauthorised - No Token Provided"});
        }

        // await promises the result, return value if found otherwise null
        const user = await User.findById(decoded.userId).select("-password");  // excluded 'password' field from the retrived user

        if (!user) {
            return res.status(404).json({ message: "User not found"});
        }

        req.user = user; // passing parameter to the next middleware/ router

        next();

    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message);
        res.status(500).json({ message: "Internal Server Error"});
    }
}
