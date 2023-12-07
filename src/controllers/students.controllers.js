// Importando as classes Student e StudentList do módulo Students.js
import { Student, StudentList } from "../models/Students/Students.js";
import { students } from "../data/Students.js";

// Criando uma nova lista de estudantes
const list = new StudentList();

students.forEach((student) => {
    const newStudent = new Student(
        student.name,
        student.age,
        student.email,
        student.description
    )
    list.addStudent(newStudent)
})

// Função para obter todos os estudantes
export const getAllStudent = (req, res) => {
    // Obtendo os estudantes da lista
    const students = list.getAllStudent();
    // Se não houver estudantes, retorna um erro
    if (!students) {
        return res.status(400).send({
            message: "Aluno não cadastrado!"
        })
    }
    // Retorna os estudantes
    return res.status(200).send({
        totalAlunos: students.length, students
    })
}

// Função para obter um estudante por ID
export const getStudentByID = (req, res) => {
    // Obtendo o ID da requisição
    const { id } = req.params;
    // Buscando o estudante pelo ID
    const student = list.getStudentByID(id)

    // Se o estudante não for encontrado, retorna um erro
    if(!student) {
        return res.status(400).send({
            message: "Aluno não encontrado!"
        })
    }
    // Retorna o estudante encontrado
    return res.status(200).send({
        message: `Aluno com ID: ${id}, encontrado!`, student
    })
}

// Função para criar um novo estudante
export const createStudent = (req, res) => {
    // Obtendo os dados do estudante da requisição
    const {name, age, email, description} = req.body;

    // Criando um novo estudante
    const student = new Student(name, age, email, description)
    // Adicionando o estudante à lista
    list.addStudent(student)

    // Retorna o estudante criado
    return res.status(201).send({
        messsage: "Aluno cadastrado com sucesso!", student
    })
}

// Função para atualizar um estudante
export const updateStudent = (req, res) => {
    // Obtendo o ID e os dados do estudante da requisição
    const { id } = req.params;
    const {name, age, email, description} = req.body;

    // Buscando o estudante pelo ID
    const student = list.getStudentByID(id);

    // Se o estudante não for encontrado, retorna um erro
    if (!student) res.status(404).send({
        message: "Aluno não encontrado!"
    })

    // Atualizando o estudante
    list.updateStudent(id, name, age, email, description)
    // Retorna o estudante atualizado
    return res.send(student);
}

// Função para deletar um estudante
export const deleteStudent = (req, res) => {
    // Obtendo o ID da requisição
    const { id } = req.params;
    // Buscando o estudante pelo ID
    const student = list.getStudentByID(id);

    // Se o estudante não for encontrado, retorna um erro
    if (!student) res.status(404).send({
        message: "Aluno não encontrado!"
    })
    // Deletando o estudante
    list.deleteStudent(id);
    // Retorna o estudante deletado
    return res.send(student);
}