const express = require("express")

const app = express();

const port = process.env.PORT || 3050;

app.get("/", (request, response) => {
    response.send("<h4>Acronyms Node.js backend</h4>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

