import { DataTypes } from "sequelize";
import {sequelize} from "../lib/connectDB";

const Contact = sequelize.define("Contact", {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },},
  {
    timestamps:true,}
);

export default Contact;

