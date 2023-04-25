const express = require("express");
const connectDB = require("./config/db");
const dotenv = require('dotenv').config();
const cors = require('cors');
const port = 3000;

// Connexion à la DB
connectDB();

const app = express();

// Autorisation CORS
app.use(cors({
    origin: "http://localhost:3001",
    credentials: true,
    optionsSuccessStatus: 200,
}))

// Middleware qui permet de traiter les données de la requête
app.use(express.json());
// Middleware qui permet de traiter le format x-www-form-urlencoded
app.use(express.urlencoded({extended: false}));

app.use("/post", require("./routes/post.routes"));

// Lancement du serveur
app.listen(port, () => console.log("Le serveur a démarré sur le port " + port));
