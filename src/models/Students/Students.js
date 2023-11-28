// Importando a função uuidv4 do pacote uuid para gerar IDs únicos
import { v4 as uuidv4 } from "uuid";

// Classe Student para representar um estudante
export class Student {
    // Construtor da classe Student
    constructor(name, age, email, description) {
        this.id = this.generateId(); // Gerando um ID único para o estudante
        this.name = name; // Nome do estudante
        this.age = age; // Idade do estudante
        this.email = email; // Email do estudante
        this.description = description; // Descrição do estudante
    }

    // Método para gerar um ID único
    generateId() {
        return uuidv4();
    }
}

// Classe StudentList para representar uma lista de estudantes
export class StudentList {
    // Construtor da classe StudentList
    constructor() {
        this.Students = []; // Array para armazenar os estudantes
    }

    // Método para obter todos os estudantes
    getAllStudent() {
        return this.Students;
    }

    // Método para obter um estudante por ID
    getStudentByID(id) {
        const student = this.Students.find((student) => student.id == id);
        return student;
    }

    // Método para adicionar um estudante
    addStudent(student) {
        this.Students.push(student);
        return student;
    }

    // Método para atualizar um estudante
    updateStudent(id, name, age, email, description) {
        const student = this.getStudentByID(id)

        if(!student) {
            return null;
        }

        student.name = name;
        student.age = age;
        student.email = email;
        student.description = description;

        return student
    }

    // Método para deletar um estudante
    deleteStudent(id) {
        this.Students = this.Students.filter((student) => student.id !== id);
    }

    // Método para validar uma URL
    isURLValida(url) {
        if(url.match(/\.(png)$/) != null){
            return true;
        } else {
            return false;
        }
    }

    // Método para verificar se os campos de entrada estão vazios
    emptyInputs(name, age, email, description) {
        if(name == "" || age == "" || email == "" || description == "") {
            return true
        } else {
            return false
        }
    }
}
