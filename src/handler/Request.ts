import { Response } from "express";
import mongoose from "mongoose";
/**
 * Handles successful responses.
 * @param res - The response object.
 * @param message - The success message.
 * @param data - The data to be included in the response.
 * @returns The response object with a success status code (200) and the provided data.
 */

export function SuccessHandler(res: Response, message: string, data: any) {
    return res.status(200).json({
        success: true,
        message,
        data,
    });
}

/**
 * Handles error responses with a status code of 404.
 * @param res - The response object.
 * @param message - The error message.
 * @returns The response object with a failure status code (404) and the provided error message.
 */
export function ErrorHandler(res: Response, message: string) {
    return res.status(404).json({
        success: false,
        message,
    });
}

/**
 * Handles error responses with a status code of 500.
 * @param res - The response object.
 * @param error - The error object.
 * @returns The response object with a failure status code (500) and the appropriate error message based on the error type.
 */
export function ServerHandler(res: Response, error: any) {
    console.error(error);

    if (error instanceof mongoose.Error.ValidationError) {
        const errors: string[] = Object.values(error.errors).map(
            (err: any) => err.message
        );
        return res.status(500).json({
            success: false,
            message: "Validation Error",
            errors,
        });
    } else if (error?.code === 11000) {
        return res.status(500).json({
            success: false,
            message: "Duplicate Key Error",
            error: error.keyValue,
        });
    }
    return res.status(500).json({
        success: false,
        error,
    });
}

/**
 * Handles unauthorized user responses with a status code of 401.
 * @param res - The response object.
 * @returns The response object with a failure status code (401) and an error message indicating that the user is not authorized to access the route.
 */
export function InvalidUserHandler(res: Response) {
    return res.status(401).json({
        success: false,
        message: "Invalid User | Not authorized to access this route",
    });
}
