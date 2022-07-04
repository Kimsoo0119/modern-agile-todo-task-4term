"use strict"

const ToDo = require("../models/ToDo")

const output = {
    home: (req, res) => {
        res.render("index");
     },
}

const process = {
    home: async (req, res) =>{
        const todo = new ToDo(req.body);
        const reponse = await todo.add();
        return res.json(reponse);

    },
    save: async (req, res) =>{
        const todo = new ToDo(req.body);
        const response = await todo.save();
        return res.json(response);

    }
}

module.exports = {
    output, 
    process,
};