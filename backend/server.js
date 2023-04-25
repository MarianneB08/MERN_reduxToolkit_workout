const express = require("express");
const connectDB = require("./config/db");
const dotenv = require('dotenv').config();
const port = 3000;

// Connexion à la DB
connectDB();

const app = express();

// Middleware qui permet de traiter les données de la requête
app.use(express.json());
// Middleware qui permet de traiter le format x-www-form-urlencoded
app.use(express.urlencoded({extended: false}));

app.use("/post", require("./routes/post.routes"));

// Lancement du serveur
app.listen(port, () => console.log("Le serveur a démarré sur le port " + port));
