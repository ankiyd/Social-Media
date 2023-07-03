import express from "express";
//import router from './Routes/user.routes';
import { addBlog, deletebyId, getAllBlogs, getbyId, getbyUserId, updateBlog } from "../Controllers/Blog.controllers";
const blogRouter = express.Router();

blogRouter.get('/',getAllBlogs);
blogRouter.post('/add',addBlog);
blogRouter.put('/update/:id',updateBlog);
blogRouter.get('/:id',getbyId);
blogRouter.delete('/:id',deletebyId);
blogRouter.get("/user/:id",getbyUserId);

export default blogRouter;