import express from 'express'
import {add,view,deleteUser,update} from '../controllers/user.js'

const router = express.Router();

router.get("/add",add)
router.get("/view",view)
router.get("/update",update)
router.get("/delete",deleteUser)

export default router