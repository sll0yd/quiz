import "dotenv/config";
import { Sequelize } from "sequelize";

// L'instance de connexion vers la BDD
export const sequelize = new Sequelize(process.env.PG_URL, {
  define: { // Une fois pour TOUS nos modèles
    createdAt: "created_at", // on map le createdAt (Sequelize) vers le created_at (Postgres)
    updatedAt: "updated_at"
  }
});


// Note : pas besoin de .connect() => ça connecte automatiquement


// Pour tester !
// await sequelize.authenticate(); // Executing (default): SELECT 1+1 AS result
