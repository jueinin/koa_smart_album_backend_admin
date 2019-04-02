"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const sequelizeGenerator_1 = __importDefault(require("../tools/sequelizeGenerator"));
const dbtables = __importStar(require("../entities/db.tables"));
;
const js_md5_1 = __importDefault(require("js-md5"));
const sequelize_1 = require("sequelize");
const checkSpace = require("check-disk-space");
let route = new koa_router_1.default({
    prefix: "/backendApi"
});
exports.route = route;
let tables = dbtables.getModels(sequelizeGenerator_1.default);
route.post('/login', async (ctx, next) => {
    let body = ctx.request.body;
    let username = body.username;
    let password = body.password;
    password = js_md5_1.default(password);
    console.log(password);
    let row = await tables.admin.findOne({
        where: {
            name: username
        }
    });
    if (!row) {
        ctx.body = {
            status: "not found"
        };
        return;
    }
    if (row.password === password) {
        ctx.session.username = username;
        ctx.body = {
            status: "ok"
        };
    }
    else {
        ctx.body = {
            status: "err password"
        };
    }
});
route.get("/getInfo", async (ctx, next) => {
    console.log(ctx.session);
    let picAmount = await tables.photo.count();
    let userAmount = await tables.user.count();
    //在线人数需要接口
    //分类先不搞了
    let usedSpace = await sequelizeGenerator_1.default.query("select sum(size) as count from photo", {
        raw: true,
        type: sequelize_1.Sequelize.QueryTypes.SELECT
    });
    //假设总容量30GB
    let remainSpace; //= 32212254720;
    remainSpace = await checkSpace('C:').then((diskSpace) => {
        return diskSpace.free;
    });
    let result = {
        picAmount, userAmount, usedSpace: parseInt(usedSpace[0].count), remainSpace,
        onlineUsers: 0, userOnlineTime: 0, dailyAddUser: 0, dailyAddSpace: 0
    };
    ctx.body = result;
});
//# sourceMappingURL=backendController.js.map