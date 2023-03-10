const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('challenge', 'userchallenge@vt-code-challenge', 'userchallenge', {
  host: 'vt-code-challenge.postgres.database.azure.com',
  port: 5432,
  dialect: 'postgres',
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false 
    }
  }
});

sequelize.authenticate()
  .then(() => {
    console.log("Authenticated and connected");
  })
  .catch((error) => {
    console.log("Error" + error);
  });

module.exports = sequelize;
