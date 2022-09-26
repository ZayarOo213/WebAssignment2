const express = require('express');

const app = express();

app.listen (5050, () => {

    console.log("Server is starting at: port 5,050:");
});

app.get ("", (req, res) => {

    res.send("<h1 align=center> This is my home page</h1>");

});

app.get ("/about", (req, res) => {

    res.send ("<h1 align=center> Welcome to my page. <br> <br> Thank you for visiting my website.</h1>");
});

app.get ("/experiences", (req, res) => {

    res.send("<h1 align=center> Here you can see my experiences.</h1><br><br> <h2 align=center>Thanks again for interesting me.</h2>.");
} );