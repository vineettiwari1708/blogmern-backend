import express from "express"
import { adminLogin, approvedCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments } from "../controllers/adminController.js"
import auth from "../middleware/auth.js"

const adminRouter = express.Router()

adminRouter.post("/login",adminLogin);
adminRouter.get("/comments", auth,getAllComments);
adminRouter.get("/blogs", auth,getAllBlogsAdmin);
adminRouter.get("/delete-comment", auth,deleteCommentById);
adminRouter.get("/approve-comment", auth,approvedCommentById);

export default adminRouter;