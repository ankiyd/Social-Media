import express from 'express';
import mongoose from 'mongoose';
import router from './Routes/user.routes';
import blogRouter from './Routes/Blog.routes';
import { addBlog } from './Controllers/Blog.controllers';


const app = express();
app.use(express.json())

app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose.connect('mongodb+srv://ankitayadav207:q0H2hX5tUcN8ayVl@cluster0.ghzwcp3.mongodb.net/Blog?retryWrites=true&w=majority')
.then(() => app.listen(3000))
.then(() => console.log("Connected"))
.catch((err) => console.log(err));
