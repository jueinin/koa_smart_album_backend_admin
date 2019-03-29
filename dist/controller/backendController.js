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
let route = new koa_router_1.default({
    prefix: "/backendApi"
});
exports.route = route;
let tables = dbtables.getModels(sequelizeGenerator_1.default);
route.post('/login', async (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = 'dd';
});
route.get("/log", async (context, next) => {
    context.body = "dddd";
});
//# sourceMappingURL=backendController.js.map