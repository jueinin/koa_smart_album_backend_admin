"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const backendController_1 = require("./controller/backendController");
let app = new koa_1.default();
app.use(backendController_1.route.routes());
app.listen(8080);
//# sourceMappingURL=index.js.map