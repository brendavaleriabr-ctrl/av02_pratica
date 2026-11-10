
import { Router } from "express";
import { jogoController } from "../controllers/jogos.controller.js";

export const jogosRouter = Router();

jogosRouter.post("/", jogoController.create);
jogosRouter.get("/", jogoController.getAll);
jogosRouter.get("/:id", jogoController.getById);
jogosRouter.put("/:id", jogoController.update);
jogosRouter.delete("/:id", jogoController.delete);