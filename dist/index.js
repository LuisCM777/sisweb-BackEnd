"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./src/routes/index"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
const port = 3000;
// Middleware
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(index_1.default);
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
