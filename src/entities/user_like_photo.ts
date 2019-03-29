/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {userLikePhotoInstance, userLikePhotoAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<userLikePhotoInstance, userLikePhotoAttribute>('userLikePhoto', {
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
