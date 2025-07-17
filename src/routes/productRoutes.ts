
import { create, list, listByCategoryOrStatus, listById, remove, update } from "../controllers/ProductController";
import { Router } from "express";


const router = Router()


router.get("/", list);
router.get("/filter", listByCategoryOrStatus);
router.get("/:id", listById);
router.post("/", create);
router.patch("/:id", update);
router.delete("/:id", remove);


export default router