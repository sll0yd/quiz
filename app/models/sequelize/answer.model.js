import { sequelize } from "./sequelize-client.js";
import { DataTypes, Model } from "sequelize";

export class Answer extends Model {}

Answer.init({
  description: {
    type: DataTypes.TEXT
  },
  is_valid: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  sequelize,
  tableName: "answer"
});

