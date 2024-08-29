require('../db/connection.js');
require("dotenv").config();

const Card = require('../model/cardSchema.js');
const { validationResult } = require('express-validator');

// to get all cards
const getCards = (req, res) => {

    Card.find(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {

            console.log({ data: data }, data);
            res.status(200).json({ data: data });
        }
    });

};

 
// to post single card data
const postCardData = async(req, res,)  => {

    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { id, title, description } = req.body;
    if (!id || !description || !title) {
        return res.status(422).json({ error: "plz fill all filled" });
    }

    const cardnewdata = new Card({ id, title, description })
    const cardresult = await cardnewdata.save();
    if (cardresult) {
        return res.status(201).json({ message: "Card Data Posted" });
    }
};


// To retrieve single card on the basis of title
const getCardData = async (req, res) => {
    console.log(req.params.title);
    try {
        const card = await Card.findOne(req.params.title);
        if (!card) {
            res.status(404).json({ message: 'Card Not Found' });
        }
        else {

            console.log({ data: card }, card);
            res.status(200).json({ data: card });
        }
    } catch (err) {
        console.log(err);
    }

};


module.exports = { getCards, postCardData, getCardData };


