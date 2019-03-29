/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {tempFileInstance, tempFileAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<tempFileInstance, tempFileAttribute>('tempFile', {
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
