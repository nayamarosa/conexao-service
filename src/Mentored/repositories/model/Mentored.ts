import postgree from './../../../db/conection';
import { DataTypes } from 'sequelize';
import { Mentor } from '../../../Mentor/repositories/model/Mentor';

const Mentored = postgree.sequelize.define('mentoreds', {
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
      interestArea: {
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
      mentorshipGoal: {
        type: DataTypes.STRING,
      },
      feedBacks: {
        type: DataTypes.STRING
      }

    });


Mentored.belongsTo(Mentor, {
  constraint: true,
  foreignKey: 'mentorUuid',
})

Mentor.hasMany(Mentored, {
  foreignKey: 'mentorUuid',
})


const init = async () => {
  await Mentored.sync()
}

init();

export { Mentored };