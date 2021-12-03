const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')
// class User extends Model  { }

class Sensors extends Model {
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

Sensors.init({
    temp_value: {
        type: DataTypes.NUMBER
    },
    humidity_value: {
        type: DataTypes.NUMBER
    },
    ec_value: {
        type: DataTypes.NUMBER
    },
    ph_value: {
        type: DataTypes.NUMBER
    },
    tds_value: {
        type: DataTypes.NUMBER
    },
    cpu_temp_value: {
        type: DataTypes.NUMBER
    },
}, {
    sequelize,
    modelName: 'sensors',
    timestamps: true,
    updatedAt: false
})

module.exports = Sensors;