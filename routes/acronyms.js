
const express = require("express");
const router = express.Router();
const pg = require("pg");
//const client = require("../db/postgres");

//const db = require("../db/postgres")

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
    console.log("getRequest");
    const client = new pg.Client({
        user: "toolsuser",
        host: "cruella.fuqua.duke.edu",
        database: "toolsdb",
        password: "F$gM10jTuTY",
        port: 5432
    })

    console.log("Attempting to connect");
    client.connect(async (err) => {
        if (err) {
            console.log("We have an error", err);
        } else {
            const result = await client.query("SELECT * FROM fuqua_acronyms");
            console.log("result!", result);
            response.send(result.rows);
        }
    });
});

module.exports = router;