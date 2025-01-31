const express = require("express");

const { Sequelize } = require("sequelize");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3002;
app.use(express.json());

const cors = require("cors");
app.use(cors());
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
        rejectUnathorized: false,
      },
    },
    logging: false,
  }
);

module.exports = sequelize;

sequelize
  .sync()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", async (req, res) => {
  try {
    const [eventsTable, metadata] = await sequelize.query(
      "SELECT * FROM events"
    );
    res.json(eventsTable);
    console.log("Table obtained");
    console.log(eventsTable[0].event_id);
  } catch (err) {
    console.log("There was an error:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/resources", async (req, res) => {
 
  try {
    const [resourcesTable, metadata2] = await sequelize.query(
      `SELECT * FROM resources WHERE event_id = ${event_id}`
    );
    console.log(event_id);
    res.json(resourcesTable);
  } catch (err) {
    console.log("There was an error:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/houses", async (req, res) => {

  try {
    const [housesTable, metadata2] = await sequelize.query(
      `SELECT * FROM houses`
    );
    console.log(housesTable);
    res.json(housesTable);
  } catch (err) {
    console.log("There was an error:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
