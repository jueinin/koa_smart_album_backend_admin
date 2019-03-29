"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('userLikePhoto', {
        userLikePhotoId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            field: 'user_like_photo_id'
        },
        userId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'user_id'
        },
        photoId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            field: 'photo_id'
        }
    }, {
        tableName: 'user_like_photo'
    });
};
//# sourceMappingURL=user_like_photo.js.map