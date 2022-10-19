const db = require("../models/model");


const controllers = {};


// OAUTH
// CREATE TABLE users (
//      id SERIAL not NULL,
//      email VARCHAR NOT NULL UNIQUE,
//      password VARCHAR NOT NULL,
//      firstname VARCHAR NOT NULL,
//      lastname VARCHAR NOT NULL
//  )


// CREATE TABLE fridge (
//     _id SERIAL PRIMARY KEY,
//     user_id INTEGER,
//     food VARCHAR(50),
//     date DATE
// )


controllers.getFridge = async (req, res, next) => {
    console.log(req.params);
    const { userId } = req.params;
    try {
        const queryString = `
        SELECT fridge.*
        FROM fridge
        WHERE user_id = $1
        `;
        const params = [userId];
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
        const { user_id, food, date } = req.body;
        const query = `
        INSERT INTO fridge (user_id, food, date)
        VALUES ($1, $2, $3)
        `;
        const params = [user_id, food, date];
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
        const { fridgeId } = req.params;
        const queryString = `
        DELETE from fridge
        WHERE _id = $1`;
        const params = [fridgeId];
        await db.query(queryString, params);
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