import { sequelize } from "./sequelize-client.js";
import { DataTypes, Model } from "sequelize";

export class Level extends Model {}

// Level.init(ATTRIBUTS, CONFIGURATION);

Level.init({
  // id : pas besoin de préciser l'id : Sequelize le gère

  name: {
    type: DataTypes.TEXT, // TEXT (Sequelize) <--> TEXT (Postgres)
    allowNull: false // Le name est obligatoire
  },

  // created_at et updated_at : Sequelize le gère
}, {
  sequelize, // Obligatoire : fournir l'instance de connexion vers la BDD
  tableName: "level", // Nous, on a déjà un BDD existante, et on souhaite se greffer dessus 
  // createdAt: "created_at", // Mapping entre le champs createdAt (Sequelize) <-> created_at (Postgres)
  // updatedAt: "updated_at" // Mapping entre le champs updatedAt (Sequelize) <-> updatedAt (Postgres)
});

