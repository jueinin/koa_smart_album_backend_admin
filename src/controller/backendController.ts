import Route from 'koa-router';
import sequelize from "../tools/sequelizeGenerator";
import * as dbtables from '../entities/db.tables';
let route = new Route({
  prefix:"/backendApi"
});
let tables = dbtables.getModels(sequelize);
route.post('/login',async (ctx,next)=>{
  console.log(ctx.request.body);
  ctx.body = 'dd';
})
route.get("/log",async (context, next) => {
  context.body = "dddd";
})
export {route};