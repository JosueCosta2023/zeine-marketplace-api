import { create, list, remove, update } from "../controllers/CategoryController";
import {  Router } from "express";


const router = Router()


router.get("/", list)
router.post("/", create)
router.patch("/:id", update)
router.delete("/:id", remove)


export default router