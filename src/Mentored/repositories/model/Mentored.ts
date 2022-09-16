const sequelize =  require('./../../../db/conection');
import { DataTypes } from 'sequelize';

const Mentored = sequelize.define('mentored', {
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
      education: {
        type: DataTypes.STRING,
        allowNull: true        
      },
      userType: {
        type: DataTypes.STRING,
        allowNull: true
      },
      questions: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
});

const init = async () => {
  await Mentored.sync()
}

init();

export { Mentored };