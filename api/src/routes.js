import { Router } from "express";
import furnitureController from "./controller/furnitureController.js";
import userController from "./controller/userConroller.js";

const routes = Router();

routes.use('/users', userController);
routes.use('/data/catalog', furnitureController)

export default routes;