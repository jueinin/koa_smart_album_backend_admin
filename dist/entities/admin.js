"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('admin', {
        adminId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            field: 'admin_id'
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: 'name'
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: 'password'
        }
    }, {
        tableName: 'admin'
    });
};
//# sourceMappingURL=admin.js.map