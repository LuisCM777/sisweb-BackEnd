"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRoutes_1 = __importDefault(require("./productRoutes"));
const apiRouter = (0, express_1.Router)();
// Prefijo "/product" para todas las rutas de productos
apiRouter.use("/product", productRoutes_1.default);
// Ruta principal de la API
apiRouter.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = apiRouter;
