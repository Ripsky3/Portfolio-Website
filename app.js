const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "./public");
const viewsPath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render("home", {
        title: "Home"
    })
})

app.get('/about', (req, res) => {
    res.render("about", {
        title: "About"
    })
})

app.get('/help', (req, res) => {
    res.render("help", {
        title: "Help"
    })
})

app.get('/projectManagementApp', (req, res) => {
    res.render("projectManagementApp", {
        title: "Project Managaement App"
    })
})

app.listen(port, () => {
    console.log("Listening on port " + port);
})