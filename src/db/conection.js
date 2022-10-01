const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://vihajicmjplljy:103645aae3759b81db7bba8a840a470f1ee0b4f9efbb01d64c1874f148657678@ec2-34-199-68-114.compute-1.amazonaws.com:5432/da9g3350ujfgik', {
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  }
});

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch((err) => console.error('Unable to connect to the database:', err));

module.exports = sequelize