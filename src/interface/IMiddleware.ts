
/**
 * Represents the interface for middleware with extended properties.
 */
import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";
export default interface IMiddleware extends Request{
    user?: JwtPayload
}