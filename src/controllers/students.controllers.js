import { Student, StudentList } from "../models/Students/Students.js";

const list = new StudentList();

export const getAllStudent = (req, res) => {
    const students = list.getAllStudent();
    if (!students) {
        return res.status(400).send({
            message: "Aluno não cadastrado!"
        })
    }
    return res.status(200).send({
        totalAlunos: students.length, students
    })
}

export const getStudentByID = (req, res) => {
    const { id } = req.params;
    const student = list.getStudentByID(id)

    if(!student) {
        return res.status(400).send({
            message: "Aluno não encontrado!"
        })
    }
    return res.status(200).send({
        message: `Aluno com ID: ${id}, encontrado!`, student
    })
}

export const createStudent = (req, res) => {
    const {name, age, email, description} = req.body;

    const student = new Student(name, age, email, description)
    list.addStudent(student)

    return res.status(201).send({
        messsage: "Aluno cadastrado com sucesso!", student
    })
}

export const updateStudent = (req, res) => {
    const { id } = req.params;
    const {name, age, email, description} = req.body;

    const student = list.getStudentByID(id);

    if (!student) res.status(404).send({
        message: "Aluno não encontrado!"
    })

    list.updateStudent(id, name, age, email, description)
    return res.send(student);
}

export const deleteStudent = (req, res) => {
    const { id } = req.params;
    const student = list.getStudentByID(id);

    if (!student) res.status(404).send({
        message: "Aluno não encontrado!"
    })
    list.deleteStudent(id);
    return res.send(student);
}
