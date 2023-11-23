import { Card, CardList } from '../models/Cards/Cards.js'

const list = new CardList();

export const getCards = (req, res) => {
    const cards = list.getCards();

    if (!cards) {
        return res.status(400).send({ message: "Cards não cadastrados!" })
    }
    return res.status(200).send({ totalCards: cards.length, cards })
}

export const getCardById = (req, res) => {
    const { id } = req.params;
    const card = list.getCardById(id)

    if (!card) {
        return res.status(400).send({ message: "Card não encontrado!" })
    }
    return res.status(200).send({ message: `Card com id ${id}, encontrado!`, card })
}

export const createCard = (req, res) => {
    const { name, type, img, description, atk, def, level } = req.body;

    const card = new Card(name, type, img, description, atk, def, level)
    list.addCard(card)

    return res.status(201).send({ message: "Card criado!", card })
}

export const updateCards = (req, res) => {
    const { id } = req.params;
    const { name, type, img, description, atk, def, level } = req.body;

    const card = list.getCardById(id)

    if (!card) res.status(404).send({ message: "Card não encontrado!" });

    list.updateCard(id, name, type, img, description, atk, def, level)
    return res.send(card);
};

export const deleteCard = (req, res) => {
    const { id } = req.params;
    const card = list.getCardById(id);

    if (!card) res.status(404).send({ message: "Card não encontrado!" });

    list.deleteCard(id)
    return res.send(card);
};