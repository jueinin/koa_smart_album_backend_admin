// tslint:disable
import * as Sequelize from 'sequelize';


// table: admin
export interface adminAttribute {
  adminId:number;
  name:string;
  password:string;
}
export interface adminInstance extends Sequelize.Instance<adminAttribute>, adminAttribute { }
export interface adminModel extends Sequelize.Model<adminInstance, adminAttribute> { }

// table: album
export interface albumAttribute {
  albumId:number;
  name?:string;
  userId?:number;
  cover?:number;
  createTime?:Date;
  lastEditTime?:Date;
  description?:string;
  isDefaultAlbum?:number;
  photoAmount?:number;
}
export interface albumInstance extends Sequelize.Instance<albumAttribute>, albumAttribute { }
export interface albumModel extends Sequelize.Model<albumInstance, albumAttribute> { }

// table: photo
export interface photoAttribute {
  photoId:number;
  name?:string;
  suffix?:string;
  path:string;
  thumbnailPath?:string;
  description?:string;
  information?:string;
  userId:number;
  albumId:number;
  likes?:number;
  isPublic?:number;
  size?:number;
  width?:number;
  height?:number;
  originalTime?:Date;
  inRecycleBin?:number;
  deleteTime?:Date;
}
export interface photoInstance extends Sequelize.Instance<photoAttribute>, photoAttribute { }
export interface photoModel extends Sequelize.Model<photoInstance, photoAttribute> { }

// table: photoTagRelation
export interface photoTagRelationAttribute {
  relationId:number;
  photoId:number;
  tagId:number;
  score?:any;
}
export interface photoTagRelationInstance extends Sequelize.Instance<photoTagRelationAttribute>, photoTagRelationAttribute { }
export interface photoTagRelationModel extends Sequelize.Model<photoTagRelationInstance, photoTagRelationAttribute> { }

// table: retrievePassword
export interface retrievePasswordAttribute {
  retrievePasswordId:number;
  userId:number;
  sid:string;
  createTime:Date;
}
export interface retrievePasswordInstance extends Sequelize.Instance<retrievePasswordAttribute>, retrievePasswordAttribute { }
export interface retrievePasswordModel extends Sequelize.Model<retrievePasswordInstance, retrievePasswordAttribute> { }

// table: tag
export interface tagAttribute {
  tagId:number;
  name:string;
}
export interface tagInstance extends Sequelize.Instance<tagAttribute>, tagAttribute { }
export interface tagModel extends Sequelize.Model<tagInstance, tagAttribute> { }

// table: tempFile
export interface tempFileAttribute {
  tempFileId:number;
  path?:string;
  createTime?:Date;
}
export interface tempFileInstance extends Sequelize.Instance<tempFileAttribute>, tempFileAttribute { }
export interface tempFileModel extends Sequelize.Model<tempFileInstance, tempFileAttribute> { }

// table: user
export interface userAttribute {
  userId:number;
  username:string;
  password:string;
  email:string;
  gender:number;
  avatar?:string;
  signature?:string;
  nickname?:string;
  storeSpace?:number;
  usedSpace?:number;
  photoAmount?:number;
  photoInRecycleBinAmount?:number;
  albumAmount?:number;
}
export interface userInstance extends Sequelize.Instance<userAttribute>, userAttribute { }
export interface userModel extends Sequelize.Model<userInstance, userAttribute> { }

// table: userLikePhoto
export interface userLikePhotoAttribute {
  userLikePhotoId:number;
  userId:number;
  photoId:number;
}
export interface userLikePhotoInstance extends Sequelize.Instance<userLikePhotoAttribute>, userLikePhotoAttribute { }
export interface userLikePhotoModel extends Sequelize.Model<userLikePhotoInstance, userLikePhotoAttribute> { }
