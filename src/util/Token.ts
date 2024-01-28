/**
 * Generates a JSON Web Token (JWT) with the provided payload.
 * @param payload - The data to be included in the token.
 * @returns The generated JWT.
 * @throws Error if JWT secret is not defined.
 */
import jwt from "jsonwebtoken";

export default async function generateToken(payload: string | object) {
  try {
    const JWTSECRET = process.env.JWTSECRET;
    if (!JWTSECRET){
      throw new Error("Token: JWT Secret is not defined");
    }
    console.log("Token: Generation successful 📈");
    const token = jwt.sign(payload,JWTSECRET,{
        expiresIn: "7d"
    })
    return token;
  } catch (error) {
    console.error("Token: Generation failed ❌", error);
  }
}
