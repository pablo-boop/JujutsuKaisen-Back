// Importando o objeto Router do pacote express
import { Router } from "express";

// Importando as funções de controlador do módulo 'cards.controllers.js'
import {
    getCards,
    getCardById,
    createCard,
    updateCards,
    deleteCard,
    filterCardsByAtk,
    filterCardsByDef
} from '../controllers/cards.controllers.js';

// Criando um novo roteador
const cardsRouter = Router();

// Associando a função getCards à rota GET "/"
cardsRouter.get("/", getCards);

// Associando a função getCardById à rota GET "/:id"
cardsRouter.get("/:id", getCardById);

// Associando a função createCard à rota POST "/"
cardsRouter.post("/", createCard);

// Associando a função updateCards à rota PUT "/:id"
cardsRouter.put("/:id", updateCards);

// Associando a função deleteCard à rota DELETE "/:id"
cardsRouter.delete("/:id", deleteCard);

// // Associando a função filterCardsByAtk à rota GET "/filter/atk/:atk"
// cardsRouter.get("/:atk", filterCardsByAtk);

// // Associando a função filterCardsByDef à rota GET "/filter/def/:def"
// cardsRouter.get("/:def", filterCardsByDef);

// Exportando o roteador
export default cardsRouter;