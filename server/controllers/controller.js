const db = require("../models/model");


const controllers = {};

// CREATE TABLE user_info (
//     _id SERIAL PRIMARY KEY,
//     username VARCHAR(50),
//     password VARCHAR(50)
//  )

// CREATE TABLE fridge (
//     _id INTEGER,
//     user_id INTEGER,
//     food_id INTEGER,
//     date DATE
//  )

// CREATE TABLE food (
//     _id SERIAL PRIMARY KEY,
//     food_item VARCHAR(50),
//     best_buy INTEGER
//  )



controllers.getFridge = async (req, res, next) => {
    console.log(req.body);
    try {
        const queryString = `
        SELECT fridge.*, food.*
        FROM fridge
        JOIN food 
        ON fridge.food_id = food._id
        WHERE user_id = $1
        `;
        const params = [1];
        const result = await db.query(queryString, params);
        res.locals.data = result.rows;
        console.log("retrieved successfully")
        next();
    } catch (err) {
        return next({
            log: 'Error in controllers.getFridge: ' + err,
            message: { err: err },
        });
    }
}

// should add items to the fridge
controllers.addToFridge = async (req, res, next) => {
    try {
        const { food_item, expiration } = req.body;
        const query = ``; // will add the query once I have user info
        const params = [food_item, expiration];
        await db.query(query, params);
        console.log("added successfully")
        next();
    } catch (err) {
        return next({
            log: 'Error in controllers.addToFridge: ' + err,
            message: { err: err },
        });
    }
}


// should delete items from the fridge
controllers.deleteFromFridge = async (req, res, next) => {
    try {
        const { id } = req.params;
        const queryString = ``; // will add the query once I have user info
        await db.query(queryString, [id]);
        console.log("deleted successfully")
        next();
    } catch (err) {
        return next({
            log: 'Error in controllers.deleteFromFridge: ' + err,
            message: { err: err },
        });
    }
};


module.exports = controllers;