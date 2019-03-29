// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  admin:def.adminModel;
  album:def.albumModel;
  photo:def.photoModel;
  photoTagRelation:def.photoTagRelationModel;
  retrievePassword:def.retrievePasswordModel;
  tag:def.tagModel;
  tempFile:def.tempFileModel;
  user:def.userModel;
  userLikePhoto:def.userLikePhotoModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    admin: seq.import(path.join(__dirname, './admin')),
    album: seq.import(path.join(__dirname, './album')),
    photo: seq.import(path.join(__dirname, './photo')),
    photoTagRelation: seq.import(path.join(__dirname, './photo_tag_relation')),
    retrievePassword: seq.import(path.join(__dirname, './retrieve_password')),
    tag: seq.import(path.join(__dirname, './tag')),
    tempFile: seq.import(path.join(__dirname, './temp_file')),
    user: seq.import(path.join(__dirname, './user')),
    userLikePhoto: seq.import(path.join(__dirname, './user_like_photo')),
  };
  return tables;
};
