"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const morgan_1 = __importDefault(require("morgan"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)("tiny"));
(0, morgan_1.default)(":method :url :status :res[content-length] - :response-time ms");
app.get("/health", async (req, res) => {
    try {
        res
            .status(200)
            .json({ message: "ServerHealthCheck: OK 📈" });
    }
    catch (error) {
        res.status(500).json({ message: "ServerHealthCheck: Failed ❌", error });
    }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on PORT :: ${PORT} 🚀`);
});
