const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://yutgibbdchjotf:44e96755307eb70d3dfceaf45d4dae8dbf9b1c53841bc01e749bf1c9a78c0bbe@ec2-34-227-135-211.compute-1.amazonaws.com:5432/d6cl9ohsgfamkc', {
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