"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generates a JSON Web Token (JWT) with the provided payload.
 * @param payload - The data to be included in the token.
 * @returns The generated JWT.
 * @throws Error if JWT secret is not defined.
 */
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function generateToken(payload) {
    try {
        const JWTSECRET = process.env.JWTSECRET;
        if (!JWTSECRET) {
            throw new Error("Token: JWT Secret is not defined");
        }
        console.log("Token: Generation successful 📈");
        const token = jsonwebtoken_1.default.sign(payload, JWTSECRET, {
            expiresIn: "7d"
        });
        return token;
    }
    catch (error) {
        console.error("Token: Generation failed ❌", error);
    }
}
exports.default = generateToken;
