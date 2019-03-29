"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = __importStar(require("seq"));
let sequelize = new Sequelize("mysql://root:chenliang@localhost:3306/new_website", {
    define: {
        timestamps: false,
        freezeTableName: true
    },
    database: "new_website"
});
//# sourceMappingURL=sequelize.js.map