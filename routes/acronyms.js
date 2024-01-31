
const express = require("express");
const router = express.Router();
const pg = require("pg");
const db = require("../db/postgres");

// Define route for get all acronyms
// http://localhost:3050/acronyms
router.get("/", (request, response) => {
    response.send("This is the get all acronyms route");
});

// Define route for get a specific acronym by id
// http://localhost:3050/acronyms/101
router.get("/101", (request, response) => {
    response.send("This the the get for acronym id=101");
});

// Define route to test postgres connectivity
// http://localhost:3050/pg
router.get("/pg", async (request, response) => {
    db.client.connect(async (err) => {
        if (err) {
            console.log("We have an error", err);
        } else {
            const result = await db.client.query("SELECT * FROM fuqua_acronyms");
            console.log("result!", result.rows[0]);
            response.send(result.rows);
        }
    });
});

module.exports = router;