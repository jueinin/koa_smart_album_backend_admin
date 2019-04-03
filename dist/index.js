"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const backendController_1 = require("./controller/backendController");
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const koa_session_1 = __importDefault(require("koa-session"));
let app = new koa_1.default();
app.keys = ['slaflflsdmf'];
//加个验证中间件  最好能把验证的username传过去
app.use(koa_bodyparser_1.default());
app.use(koa_session_1.default(app));
app.use(backendController_1.route.routes());
app.listen(8080);
//# sourceMappingURL=index.js.map