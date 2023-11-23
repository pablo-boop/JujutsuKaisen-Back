import { Router } from "express";

import {
    getCards,
    getCardById,
    createCard,

} from '../controllers/cards.controllers.js';

const cardsRouter = Router();

cardsRouter.get("/", getCards);
cardsRouter.get("/:id", getCardById);
cardsRouter.post("/", createCard);

export default cardsRouter;