import { v4 as uuidv4 } from "uuid";

export class Card {
    constructor(name, img, description, atk, def, level) {
        this.id = this.generateId();
        this.name = name;
        this.img = img;
        this.description = description;
        this.atk = atk;
        this.def = def;
        this.level = level;
    }

    generateId() {
        return uuidv4();
    }
}