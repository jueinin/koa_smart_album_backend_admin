"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('tag', {
        tagId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            field: 'tag_id'
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            primaryKey: true,
            field: 'name'
        }
    }, {
        tableName: 'tag'
    });
};
//# sourceMappingURL=tag.js.map