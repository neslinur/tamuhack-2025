
const express = require("express");

const {Sequelize}= require('sequelize');
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;


const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
  host: process.env.DB_HOST,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnathorized: false
    }
  },
  logging: false
})

module.exports = sequelize;

sequelize.sync().then(() => {console.log("Database connected")}).catch((err)=>{console.log(err)});

app.get("/", async (req, res) => {
  try {
    const [eventsTable, metadata] = await sequelize.query('SELECT * FROM events');
    res.json(eventsTable); 
    console.log("Table obtained");

  } catch (err) {
    console.log('There was an error:', err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});