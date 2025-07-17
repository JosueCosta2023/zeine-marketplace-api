import { create, list, login, remove, update } from "../controllers/UserController";
import { Router } from "express";

const router = Router()


router.get("/", list);
router.post("/", create);
router.patch("/:id", update);
router.delete("/:id", remove);
router.post("/login", login)


export default router