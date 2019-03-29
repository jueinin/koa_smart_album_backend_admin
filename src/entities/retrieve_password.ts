/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {retrievePasswordInstance, retrievePasswordAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<retrievePasswordInstance, retrievePasswordAttribute>('retrievePassword', {
    retrievePasswordId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'retrieve_password_id'
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'user_id'
    },
    sid: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'sid'
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'create_time'
    }
  }, {
    tableName: 'retrieve_password'
  });
};
