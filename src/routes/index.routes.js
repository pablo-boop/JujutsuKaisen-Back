import { Router } from "express";
import cardsRouter from "./cards.routes.js";
import studentsRouter from "./students.routes.js";

const router = Router();

router.get("/", (req, res) => {
    return res.status(200).send({ message: "Servidor funcionando!" })
});

router.use("/cards", cardsRouter);
router.use("/students", studentsRouter);

export default router;