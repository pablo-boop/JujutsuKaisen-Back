import { v4 as uuidv4 } from "uuid";

export class Card {
    constructor(name, type, img, typeDescription, description, atk, def, level) {
        this.id = this.generateId();
        this.name = name;
        this.type = type;
        this.img = img;
        this.typeDescription = typeDescription;
        this.description = description;
        this.atk = atk;
        this.def = def;
        this.level = level;
    }

    generateId() {
        return uuidv4();
    }
}

export class CardList {
    constructor() {
        this.cards = [];
        this.deckOne = [];
        this.deckTwo = [];
    }

    //CRUD
    getCards() {
        return this.cards;
    }

    getCardById(id) {
        const card = this.cards.find((card) => card.id == id);
        return card;
    }

    addCard(param) {
        this.cards.push(param);
        return param;
    }

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

    deleteCard(id) {
        this.cards = this.cards.filter((card) => card.id !== id)
    }

    //CRUD Validatons
    isURLValida(url) {
        if(url.match(/\.(png)$/) != null){
            return true;
        } else {
            return false;
        }
    }

    emptyInputs(name, type, img, typeDescription, description, atk, def, level) {

        if(name == "" || type == "" || img == "" || typeDescription == "" || description == "" || atk == "" || def == "" || level == "") {
            return true
        } else {
            return false
        }
    }
}