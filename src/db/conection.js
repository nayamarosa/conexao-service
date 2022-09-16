const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://cmymectxfzchjp:8b90c867378d8bd471b4f00f4f633002af67e6e12fd783008e3b29bc2c2a2789@ec2-44-195-132-31.compute-1.amazonaws.com:5432/dadcvudd04t0q5', {
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