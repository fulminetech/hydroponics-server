const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')
// class User extends Model  { }

class Recipies extends Model {
    // static classLevelMethod() {
    //     return 'foo';
    // }
    // instanceLevelMethod() {
    //     return 'bar';
    // }
    // getFullname() {
    //     return [this.firstname, this.lastname].join(' ');
    // }
}

Recipies.init({
    plant: {
        type: DataTypes.STRING
    },
    growth_time_days: {
        type: DataTypes.NUMBER
    },
    temp_lowerlimit: {
        type: DataTypes.NUMBER
    },
    temp_upperlimit: {
        type: DataTypes.NUMBER
    },
    humidity_lowerlimit: {
        type: DataTypes.NUMBER
    },
    humidity_upperlimit: {
        type: DataTypes.NUMBER
    },
    ppm_lowerlimit: {
        type: DataTypes.NUMBER
    },
    ppm_upperlimit: {
        type: DataTypes.NUMBER
    },
    ph_lowerlimit: {
        type: DataTypes.NUMBER
    },
    ph_upperlimit: {
        type: DataTypes.NUMBER
    },
    light_schedule_cron: {
        type: DataTypes.STRING
    },
    motor_schedule_cron: {
        type: DataTypes.STRING
    },
    motor_schedule_on_time_mins: {
        type: DataTypes.NUMBER
    },
    camera_interval_mins: {
        type: DataTypes.NUMBER
    },
}, {
    sequelize,
    modelName: 'recipies',
    timestamps: true
})

module.exports = Recipies;