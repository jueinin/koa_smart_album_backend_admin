"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('album', {
        albumId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            field: 'album_id'
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: true,
            field: 'name'
        },
        userId: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'user',
                key: 'user_id'
            },
            field: 'user_id'
        },
        cover: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'cover'
        },
        createTime: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'create_time'
        },
        lastEditTime: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'last_edit_time'
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: 'description'
        },
        isDefaultAlbum: {
            type: DataTypes.INTEGER(1),
            allowNull: true,
            field: 'is_default_album'
        },
        photoAmount: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'photo_amount'
        }
    }, {
        tableName: 'album'
    });
};
//# sourceMappingURL=album.js.map