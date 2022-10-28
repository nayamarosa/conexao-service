import Sequelize from 'sequelize';

const sequelize = new Sequelize('postgres://ywdecquovltlsm:7bbe18912d0d68f7a063b5e1f4e7dacb47ccdf019ba168378b33873dfa1353f5@ec2-34-198-198-141.compute-1.amazonaws.com:5432/dakjv6e3et0h23', {
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

export default {
  Sequelize,
  sequelize
}