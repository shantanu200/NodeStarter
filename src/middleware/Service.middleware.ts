
/**
 * Middleware function to authenticate and authorize user requests.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next function to call in the middleware chain.
 * @returns Promise<void>
 * @throws Error if JWTSECRET is not found or token is not provided.
 */
import { Response } from "express";
import { NextFunction } from "express";
import IMiddleware from "../interface/IMiddleware";
import { config } from "dotenv";
import jwt, { JwtPayload } from "jsonwebtoken";
config();

export default async function ServiceMiddleware(
  req: IMiddleware,
  res: Response,
  next: NextFunction
) {
  try {
    const JWTSECRET = process.env.JWTSECRET;

    if (!JWTSECRET) throw new Error("Middleware: JWTSECRET not found");

    const token = req.headers.authorization?.split(" ")[1];

    if (!token)
      throw new Error(
        "Middleware: Middleware Token not found | Please login again"
      );

    const user = jwt.verify(token, JWTSECRET) as JwtPayload;

    // Make your DB call here to check if the user exists or not

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Middleware: Middleware Request Failed | Please login again",
    });
  }
}
