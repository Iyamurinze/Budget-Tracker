const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres", // Specify dialect explicitly
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false, // Disable logging (optional)
});

// Test the connection
sequelize.authenticate()
  .then(() => console.log("PostgreSQL database connected successfully"))
  .catch((err) => console.error("Unable to connect to the PostgreSQL database:", err));

module.exports = sequelize;
