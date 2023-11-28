// Importando o objeto Router do pacote express
import { Router } from "express";

// Importando os roteadores para "cards" e "students"
import cardsRouter from "./cards.routes.js";
import studentsRouter from "./students.routes.js";

// Criando um novo roteador
const router = Router();

// Definindo uma rota GET para a raiz ("/") do aplicativo
router.get("/", (req, res) => {
    // Enviando uma resposta com status 200 e uma mensagem
    return res.status(200).send({ message: "Servidor funcionando!" })
});

// Associando o roteador de "cards" à rota "/cards"
router.use("/cards", cardsRouter);

// Associando o roteador de "students" à rota "/students"
router.use("/students", studentsRouter);

// Exportando o roteador
export default router;