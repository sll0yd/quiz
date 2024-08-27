import { sequelize } from "./sequelize-client.js";
import { DataTypes, Model } from "sequelize";

export class Tag extends Model {}

Tag.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  tableName: "tag"
});

