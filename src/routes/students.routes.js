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
studentsRouter.post("/", createStudent);
studentsRouter.put("/:id", updateStudent);
studentsRouter.delete("/:id", deleteStudent);

export default studentsRouter;