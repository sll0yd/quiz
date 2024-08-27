import { sequelize } from "./sequelize-client.js";
import { DataTypes, Model } from "sequelize";

export class User extends Model {}

User.init({
  firstname: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  lastname: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  email: {
    type: DataTypes.STRING(255), // Equivalent de varchar(255) // par curiosité
    allowNull: false
  },

  password: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  tableName: "user",
});

