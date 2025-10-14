import { Router } from "express";
import { login, register } from "./auth.controller.js";
import { uploadProfilePicture} from "../../middlewares/file-uploader.js";
import { loginValidator, registerValidator } from "../../middlewares/auth-validator.js";

const router = Router()

router.post('/register', 
    uploadProfilePicture.single('profilePicture'),
    registerValidator,
    loginValidator,
    register
)

router.post('/login', login)

export default router