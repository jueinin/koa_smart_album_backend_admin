"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        userId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            field: 'user_id'
        },
        username: {
            type: DataTypes.STRING(30),
            allowNull: false,
            field: 'username'
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: 'password'
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: 'email'
        },
        gender: {
            type: DataTypes.INTEGER(1),
            allowNull: false,
            defaultValue: '0',
            field: 'gender'
        },
        avatar: {
            type: DataTypes.STRING(200),
            allowNull: true,
            field: 'avatar'
        },
        signature: {
            type: DataTypes.STRING(200),
            allowNull: true,
            field: 'signature'
        },
        nickname: {
            type: DataTypes.STRING(100),
            allowNull: true,
            field: 'nickname'
        },
        storeSpace: {
            type: DataTypes.BIGINT,
            allowNull: true,
            field: 'store_space'
        },
        usedSpace: {
            type: DataTypes.BIGINT,
            allowNull: true,
            field: 'used_space'
        },
        photoAmount: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'photo_amount'
        },
        photoInRecycleBinAmount: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'photo_in_recycle_bin_amount'
        },
        albumAmount: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'album_amount'
        }
    }, {
        tableName: 'user'
    });
};
//# sourceMappingURL=user.js.map