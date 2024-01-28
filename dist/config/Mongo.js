"use strict";
/**
 * Connects to the MongoDB database using the provided connection URI.
 * @throws {Error} If the connection URI is not defined.
 * @returns {Promise<void>} A promise that resolves when the database connection is established.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectDB = exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
async function connectDB() {
    try {
        const DBURL = process.env.MONGOURI;
        if (!DBURL)
            throw new Error("Database: Connection uri is not defined");
        const conn = await mongoose_1.default.connect(DBURL);
        if (conn.connection.readyState === 1)
            console.log("Database: Connected 📈");
    }
    catch (error) {
        console.error("Database: Connection failed ❌", error);
    }
}
exports.connectDB = connectDB;
/**
 * Disconnects from the MongoDB database.
 * @throws {Error} If the database is already disconnected.
 * @returns {Promise<void>} A promise that resolves when the database is disconnected.
 */
async function disconnectDB() {
    try {
        if (mongoose_1.default.connection.readyState === 0)
            throw new Error("Database: Already disconnected 📉");
        await mongoose_1.default.disconnect();
        console.log("Database: Disconnected 📉");
    }
    catch (error) {
        console.error("Database: Disconnection failed ❌", error);
    }
}
exports.disconnectDB = disconnectDB;
