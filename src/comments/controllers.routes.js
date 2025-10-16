import { Router} from "express";
import { createComment } from "./comments.controllers.js";


const router = Router();

//Crear comentario
router.post("/". createComment);

export default router;