/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {tagInstance, tagAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<tagInstance, tagAttribute>('tag', {
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
