const sequelize =  require('./../../../db/conection');
import { DataTypes } from 'sequelize';

const Mentor = sequelize.define('mentor', {
    uuid: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING ,
        allowNull: false,
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      document: {
        type: DataTypes.STRING,
        allowNull: true   
      },
      profession: {
        type: DataTypes.STRING,
        allowNull: true
      },
      practiceArea: {
        type: DataTypes.STRING,
        allowNull: true
      },
      practiceTime: {
        type: DataTypes.STRING
      },
      education: {
        type: DataTypes.STRING,
        allowNull: true        
      },
      userType: {
          type: DataTypes.STRING,
          allowNull: true
      }
});

const init = async () => {
  await Mentor.sync()
}

init();

export { Mentor };