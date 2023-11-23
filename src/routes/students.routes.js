import { Router } from "express";

import {
    getAllStudent,
    getStudentByID,
    createStudent,
    updateStudent,
    deleteStudent
} from '../controllers/students.controllers.js'

const studentsRouter = Router();

studentsRouter.get("/", getAllStudent);
studentsRouter.get("/:id", getStudentByID);
studentsRouter.get("/", createStudent);
studentsRouter.get("/:id", updateStudent);
studentsRouter.get("/:id", deleteStudent);

export default studentsRouter;