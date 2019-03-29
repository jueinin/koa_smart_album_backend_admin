/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {photoTagRelationInstance, photoTagRelationAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<photoTagRelationInstance, photoTagRelationAttribute>('photoTagRelation', {
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
