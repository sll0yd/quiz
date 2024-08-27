// Charger les variables d'environnement
import "dotenv/config";

import express from "express";
import { router } from "./app/router.js"; // ATTENTION : ne pas oublier l'extension .js en ESM

// Create Express app
const app = express();

// Configure view engine
app.set("view engine", "ejs");
app.set("views", "./app/views");

// Configure public folder
app.use(express.static("./public"));

// Configure body parser
app.use(express.urlencoded({ extended: true }));

// Plug router
app.use(router);


// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`);
});
