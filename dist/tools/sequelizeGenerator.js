"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
let sequelize = new sequelize_1.default.Sequelize({
    host: "localhost",
    dialect: "mysql",
    database: "newbee_smart_album",
    username: "root",
    password: "chenliang",
    define: {
        timestamps: false,
    }
});
exports.default = sequelize;
//# sourceMappingURL=sequelizeGenerator.js.map