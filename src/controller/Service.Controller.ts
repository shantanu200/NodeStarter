
/**
 * Handles the request and response for the controller.
 * 
 * @param req The request object.
 * @param res The response object.
 */
import { Request,Response } from "express";
import { ErrorHandler, ServerHandler } from "../handler/Request";
export async function controllerHandler(req:Request,res:Response){
   try {
    // Add your code here
   } catch (error) {
    return ServerHandler(res,error);
   }
}