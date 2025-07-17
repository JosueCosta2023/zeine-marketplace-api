import { create, list } from "../controllers/UserController";
import { Router } from "express";

const router = Router()


router.get("/", list);
router.post("/", create);


export default router