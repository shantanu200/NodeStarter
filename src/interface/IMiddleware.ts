import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";
export default interface IMiddleware extends Request{
    user?: JwtPayload
}