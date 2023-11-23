import { v4 as uuidv4 } from "uuid";

export class Student {
    constructor(name, age, email, description) {
        this.id = this.generateId();
        this.name = name;
        this.age = age;
        this.email = email;
        this.description = description;
    }

    generateId() {
        return uuidv4();
    }
}
export class StudentList {
    constructor() {
        this.Students = [];
    }

    //C.R.U.D completo

    //Get all Students
    getAllStudent() {
        return this.Students;
    }

    //Get Student by ID
    getStudentByID(id) {
        const student = this.Students.find((student) => student.id == id);
        return student;
    }

    //Add Student
    addStudent(student) {
        this.Students.push(student);
        return student;
    }

    //Update Student
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

    deleteStudent(id) {
        this.Students = this.Students.filter((student) => student.id !== id);
    }

     //C.R.U.D validations
     isURLValida(url) {
        if(url.match(/\.(png)$/) != null){
            return true;
        } else {
            return false;
        }
    }

    emptyInputs(name, age, email, description) {

        if(name == "" || age == "" || email == "" || description == "") {
            return true
        } else {
            return false
        }
    }
}
