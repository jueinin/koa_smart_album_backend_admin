"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('photoTagRelation', {
        relationId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            field: 'relation_id'
        },
        photoId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'photo',
                key: 'photo_id'
            },
            field: 'photo_id'
        },
        tagId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'tag_id'
        },
        score: {
            type: "DOUBLE(11,8)",
            allowNull: true,
            field: 'score'
        }
    }, {
        tableName: 'photo_tag_relation'
    });
};
//# sourceMappingURL=photo_tag_relation.js.map