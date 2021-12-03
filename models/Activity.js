const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')
// class User extends Model  { }

class Activity extends Model {
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

Activity.init({
    type: {
        type: DataTypes.NUMBER
    },
    value: {
        type: DataTypes.BOOLEAN
    },
    
}, {
    sequelize,
    modelName: 'activity',
    timestamps: true,
    updatedAt: false
})

module.exports = Activity;