import Koa from 'koa';
import {route} from "./controller/backendController";
import koaParser from 'koa-bodyparser'
import koaSession from 'koa-session';
import * as session from "koa-session";

let app = new Koa();
app.keys = ['slaflflsdmf'];
//加个验证中间件  最好能把验证的username传过去
app.use(koaParser());
app.use(koaSession(app));
app.use(route.routes());
app.listen(3001);