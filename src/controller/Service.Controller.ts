import { Request,Response } from "express";
import { ErrorHandler, ServerHandler } from "../handler/Request";
export async function controllerHandler(req:Request,res:Response){
   try {
    // Add your code here
   } catch (error) {
    return ServerHandler(res,error);
   }
}