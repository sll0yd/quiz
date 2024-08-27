import { sequelize } from "./sequelize-client.js";
import { DataTypes, Model } from "sequelize";

export class Quiz extends Model {}

Quiz.init({
  title: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  }
}, {
  sequelize,
  tableName: "quiz"
});

