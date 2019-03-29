import Koa from 'koa';
import {route} from "./controller/backendController";

let app = new Koa();
app.use(route.routes());

app.listen(8080);