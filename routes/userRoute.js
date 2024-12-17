import express from "express"
import { loginUser,signinUser} from "../controllers/userController.js"


const userRouter = express.Router()

userRouter.post("/signin",signinUser)
userRouter.post( "/login",loginUser)

export default userRouter;
