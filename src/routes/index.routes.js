import { Router } from "express";
import cardsRouter from "./cards.routes";

const router = Router();

router.get("/", (req, res) => {
    return res.status(200).send({ message: "Servidor funcionando!" })
});

router.use("/cards", cardsRouter);

export default router;