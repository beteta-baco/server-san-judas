import { Router } from 'express'
import { createPost,
    getAltPost, 
    getPostById 
} from './post.controller.js'

const router = Router()

router.post('/', createPost)

router.get('/', getAltPost)

router.get('/', getPostById)

export default router
