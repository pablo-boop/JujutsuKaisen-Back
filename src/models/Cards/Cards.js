// Importando a função uuidv4 do pacote uuid para gerar IDs únicos
import { v4 as uuidv4 } from "uuid";

// Classe Card para representar um cartão
export class Card {
    // Construtor da classe Card
    constructor(name, type, img, typeDescription, description, atk, def, level) {
        this.id = this.generateId(); // Gerando um ID único para o cartão
        this.name = name; // Nome do cartão
        this.type = type; // Tipo do cartão
        this.img = img; // Imagem do cartão
        this.typeDescription = typeDescription; // Descrição do tipo do cartão
        this.description = description; // Descrição do cartão
        this.atk = atk; // Ataque do cartão
        this.def = def; // Defesa do cartão
        this.level = level; // Nível do cartão
    }

    // Método para gerar um ID único
    generateId() {
        return uuidv4()
    }
}

// Classe CardList para representar uma lista de cartões
export class CardList {
    // Construtor da classe CardList
    constructor() {
        this.cards = []; // Array para armazenar os cartões
        this.deckOne = []; // Array para armazenar o deck um
        this.deckTwo = []; // Array para armazenar o deck dois
    }

    // Método para obter todos os cartões
    getCards() {
        return this.cards;
    }

    // Método para obter um cartão por ID
    getCardById(id) {
        const card = this.cards.find((card) => card.id == id);
        return card;
    }

    // Método para adicionar um cartão
    addCard(param) {
        
        if(this.emptyInputs) {
            return console.error('erro');
        }
        this.cards.push(param);
        return param;
    }

    // Método para atualizar um cartão
    updateCard(id, name, type, img, typeDescription, description, atk, def, level) {
        const card = this.getCardById(id)

        if (!card) {
            return null;
        }

        card.name = name;
        card.type = type;
        card.img = img;
        card.typeDescription = typeDescription;
        card.description = description;
        card.atk = atk;
        card.def = def;
        card.level = level;

        return card;
    }

    // Método para deletar um cartão
    deleteCard(id) {
        this.cards = this.cards.filter((card) => card.id !== id)
    }

    // Método para verificar se os campos de entrada estão vazios
    emptyInputs(name, type, img, typeDescription, description, atk, def, level) {
        if(name == "" || type == "" || img == "" || typeDescription == "" || description == "" || atk == "" || def == "" || level == "") {
            return true
        } else {
            return false
        }
    }
}