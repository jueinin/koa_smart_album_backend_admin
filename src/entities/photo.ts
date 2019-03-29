/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {photoInstance, photoAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<photoInstance, photoAttribute>('photo', {
    photoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'photo_id'
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'name'
    },
    suffix: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'suffix'
    },
    path: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'path'
    },
    thumbnailPath: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'thumbnail_path'
    },
    description: {
      type: DataTypes.STRING(400),
      allowNull: true,
      field: 'description'
    },
    information: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'information'
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
      },
      field: 'user_id'
    },
    albumId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'album',
        key: 'album_id'
      },
      field: 'album_id'
    },
    likes: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'likes'
    },
    isPublic: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      field: 'is_public'
    },
    size: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'size'
    },
    width: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      field: 'width'
    },
    height: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      field: 'height'
    },
    originalTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'original_time'
    },
    inRecycleBin: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
      field: 'in_recycle_bin'
    },
    deleteTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'delete_time'
    }
  }, {
    tableName: 'photo'
  });
};
