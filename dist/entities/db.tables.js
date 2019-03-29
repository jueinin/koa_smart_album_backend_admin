"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable
const path = __importStar(require("path"));
exports.getModels = function (seq) {
    const tables = {
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
//# sourceMappingURL=db.tables.js.map