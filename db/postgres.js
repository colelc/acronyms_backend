//import { Client, Pool } from "pg";

// const pool = new Pool({
//     user: "toolsuser",
//     host: "cruella.fuqua.duke.edu",
//     database: "toolsdb",
//     password: "F$gM10jTuTY",
//     port: 5432
// });

// //console.log(await pool.query("SELECT NOW()"));

// const client = new Client({
//     user: "toolsuser",
//     host: "cruella.fuqua.duke.edu",
//     database: "toolsdb",
//     password: "F$gM10jTuTY",
//     port: 5432
// });

// const getConnection = () => {
//     const connection = client.connect((err) => {
//         if (err) throw err;
//         console.log("Connected to Postgres!");
//         return connection;
//     });
// };

// const closeConnection = (client) => {
//     client.closeConnection();
//     console.log("Closed Postgres client connection");
// };


//await client.connect();

//console.log(await client.query("SELECT NOW()"));

//await client.end();

// exports.getConnection = getConnection;
// exports.closeConnection = closeConnection;
// exports.client = client;
// exports.pool = pool;


// class DB {
//    // import { Pool } from "pg";
//     constructor(client, pool) {
//         this.client = new Client({
//             user: "toolsuser",
//             host: "cruella.fuqua.duke.edu",
//             database: "toolsdb",
//             password: "F$gM10jTuTY",
//             port: 5432
//         });

//         this.pool = new Pool({
//             user: "toolsuser",
//             host: "cruella.fuqua.duke.edu",
//             database: "toolsdb",
//             password: "F$gM10jTuTY",
//             port: 5432
//         });
//     }

//     testConnection = async () => {
//         await this.client.connect();
//         console.log(await this.client.query("SELECT NOW()"));
//         await this.client.end();
//     }

//     getClient = () => {
//         return this.client;
//     };
// }

// module.exports = DB;

