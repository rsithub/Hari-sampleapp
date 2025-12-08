import { Sequelize } from "sequelize";
const sequelize=new Sequelize(
    'first',
    'postgres',
    '805482ham',{
  host: 'localhost',
  port:'5432',
  dialect: 'postgres',
});

// Authenticate the connection
async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.log('Unable to connect to the database:', error);
  }
}

export { sequelize, connectDB };
