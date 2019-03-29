/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {adminInstance, adminAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<adminInstance, adminAttribute>('admin', {
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
