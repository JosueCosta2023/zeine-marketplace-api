
import { authenticateToken } from "../middlewares/authMiddleware";
import { create, list, listByCategoryOrStatus, listById, remove, update } from "../controllers/ProductController";
import { Router } from "express";


const router = Router()


router.get("/", list);
router.get("/filter", listByCategoryOrStatus);
router.get("/:id", listById);
router.post("/", create);
router.patch("/:id", authenticateToken, update);
router.delete("/:id", authenticateToken, remove);


export default router