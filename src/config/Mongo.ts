/**
 * Connects to the MongoDB database using the provided connection URI.
 * @throws {Error} If the connection URI is not defined.
 * @returns {Promise<void>} A promise that resolves when the database connection is established.
 */

import mongoose from "mongoose";
export async function connectDB() {
    try {
        const DBURL = process.env.MONGOURI;

        if (!DBURL) throw new Error("Database: Connection uri is not defined");

        const conn = await mongoose.connect(DBURL);

        if (conn.connection.readyState === 1) console.log("Database: Connected 📈");
    } catch (error) {
        console.error("Database: Connection failed ❌", error);
    }
}

/**
 * Disconnects from the MongoDB database.
 * @throws {Error} If the database is already disconnected.
 * @returns {Promise<void>} A promise that resolves when the database is disconnected.
 */
export async function disconnectDB(): Promise<void> {
    try {
        if(mongoose.connection.readyState === 0) throw new Error("Database: Already disconnected 📉");

        await mongoose.disconnect();
        console.log("Database: Disconnected 📉");
    } catch (error) {
        console.error("Database: Disconnection failed ❌", error);
    }
}
