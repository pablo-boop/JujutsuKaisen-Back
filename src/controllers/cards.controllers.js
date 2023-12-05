// Importando as classes Card e CardList do módulo Cards.js
import { Card, CardList } from "../models/Cards/Cards.js";
import { characters } from "../data/Characters.js";

// Criando uma nova lista de cartas
const list = new CardList();

// Função para obter todas as cartas
characters.forEach((character) => {
    const newCard = new Card(
        character.id,
        character.name,
        character.type,
        character.img,
        character.typeDescription,
        character.description,
        character.atk,
        character.def,
        character.level
    );
    list.addCard(newCard)
});

export const getCards = (req, res) => {
    // Obtendo as cartas da lista
    const cards = list.getCards();

    const { atk, def } = req.query;

    if (atk || def) {
        const filter = cards.filter((card) => (
            card.atk == atk || card.def == def
        ))
        return res.status(200).send({ message: `Card encontrado com o atk:${atk} e def:${def}`, filter })
    }

    // Se não houver cartas, retorna um erro
    if (cards.length === 0) {
        return res.status(400).send({ message: "Cards não cadastrados!" });
    }

    // Retorna as cartas
    return res.status(200).send({ totalCards: cards.length, cards });
}

// Função para obter uma carta por ID
export const getCardById = (req, res) => {
    // Obtendo o ID da requisição
    const { id } = req.params;
    // Buscando a carta pelo ID
    const card = list.getCardById(id);

    // Se a carta não for encontrada, retorna um erro
    if (!card) {
        return res.status(400).send({ message: "Card não encontrado!" });
    }
    // Retorna a carta encontrada
    return res
        .status(200)
        .send({ message: `Card com id ${id}, encontrado!`, card });
};

// Função para criar uma nova carta
export const createCard = (req, res) => {
    // Obtendo os dados da carta da requisição
    const { name, type, img, typeDescription, description, atk, def, level } = req.body;

    // Criando uma nova carta
    const card = new Card(name, type, img, typeDescription, description, atk, def, level)
    // Adicionando a carta à lista
    list.addCard(card)
    // Retorna a carta criada
    return res.status(201).send({ message: "Card criado!", card })

}

// Função para atualizar uma carta
export const updateCards = (req, res) => {
    // Obtendo o ID e os dados da carta da requisição
    const { id } = req.params;
    console.log("to aqui:", id);
    const { name, type, img, typeDescription, description, atk, def, level } = req.body;

    // Buscando a carta pelo ID
    const card = list.getCardById(id);

    // Se a carta não for encontrada, retorna um erro
    if (!card) res.status(404).send({ message: "Card não encontrado!" });

    // Atualizando a carta
    list.updateCard(
        id,
        name,
        type,
        img,
        typeDescription,
        description,
        atk,
        def,
        level
    );
    // Retorna a carta atualizada
    return res.send(card);
};

// Função para deletar uma carta
export const deleteCard = (req, res) => {
    // Obtendo o ID da requisição
    const { id } = req.params;
    // Buscando a carta pelo ID
    const card = list.getCardById(id);

    // Se a carta não for encontrada, retorna um erro
    if (!card) res.status(404).send({ message: "Card não encontrado!" });

    // Deletando a carta
    list.deleteCard(id);
    // Retorna a carta deletada
    return res.send(card);
};
