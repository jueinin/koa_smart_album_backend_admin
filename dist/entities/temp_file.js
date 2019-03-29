"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('tempFile', {
        tempFileId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            field: 'temp_file_id'
        },
        path: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: 'path'
        },
        createTime: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'create_time'
        }
    }, {
        tableName: 'temp_file'
    });
};
//# sourceMappingURL=temp_file.js.map