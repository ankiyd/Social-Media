import express from 'express';
import { getAllUser, login, signup } from "../Controllers/user-controller";
import { getbyId } from '../Controllers/user-controller';

const router = express.Router();

router.get("/",getAllUser);
router.post("/signup",signup);
router.post("/login",login);
router.get('/:id', getbyId);

export default router;
