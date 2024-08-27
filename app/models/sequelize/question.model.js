import { sequelize } from "./sequelize-client.js";
import { DataTypes, Model } from "sequelize";

export class Question extends Model {}

Question.init({
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  wiki: {
    type: DataTypes.TEXT
  },
  anecdote: {
    type: DataTypes.TEXT
  }
}, {
  sequelize,
  tableName: "question"
});
