"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('retrievePassword', {
        retrievePasswordId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            field: 'retrieve_password_id'
        },
        userId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'user_id'
        },
        sid: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: 'sid'
        },
        createTime: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'create_time'
        }
    }, {
        tableName: 'retrieve_password'
    });
};
//# sourceMappingURL=retrieve_password.js.map