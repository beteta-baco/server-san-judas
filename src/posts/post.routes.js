import { Router } from 'express'
import { createPost,
    getAltPost, 
    getPostById 
} from './post.controller.js'
import { createpostValidator } from '../../middlewares/post-validators.js'
const router = Router()

router.post('/', createpostValidator, createPost)

router.get('/', getAltPost)

router.get('/', getPostById)

export default router
