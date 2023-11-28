// Importando o objeto Router do pacote express
import { Router } from "express";

// Importando as funções de controlador do módulo 'students.controllers.js'
import {
    getAllStudent,
    getStudentByID,
    createStudent,
    updateStudent,
    deleteStudent
} from '../controllers/students.controllers.js';

// Criando um novo roteador
const studentsRouter = Router();

// Associando a função getAllStudent à rota GET "/"
studentsRouter.get("/", getAllStudent);

// Associando a função getStudentByID à rota GET "/:id"
studentsRouter.get("/:id", getStudentByID);

// Associando a função createStudent à rota POST "/"
studentsRouter.post("/", createStudent);

// Associando a função updateStudent à rota PUT "/:id"
studentsRouter.put("/:id", updateStudent);

// Associando a função deleteStudent à rota DELETE "/:id"
studentsRouter.delete("/:id", deleteStudent);

// Exportando o roteador
export default studentsRouter;