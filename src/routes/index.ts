import { Router, Request, Response } from "express";
import productRoutes from "./productRoutes";

const apiRouter: Router = Router();

// Prefijo "/product" para todas las rutas de productos
apiRouter.use("/product", productRoutes);

// Ruta principal de la API
apiRouter.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default apiRouter;
