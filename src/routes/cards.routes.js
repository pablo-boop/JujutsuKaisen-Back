import { Router } from "express";

import {
    getCards,
    getCardById,
    createCard,
    updateCards,
    deleteCard

} from '../controllers/cards.controllers.js';

const cardsRouter = Router();

cardsRouter.get("/", getCards);
cardsRouter.get("/:id", getCardById);
cardsRouter.post("/", createCard);
cardsRouter.put("/:id", updateCards);
cardsRouter.delete("/:id", deleteCard);

export default cardsRouter;