import Route from 'koa-router';
import sequelize from "../tools/sequelizeGenerator";
import * as dbtables from '../entities/db.tables';;
import md5 from "js-md5";
import Axios from "axios";
import {Sequelize} from "sequelize";
import * as os from "os";
const checkSpace = require("check-disk-space");
let route = new Route({
  prefix:"/backendApi"
});
let tables = dbtables.getModels(sequelize);
route.post('/login',async (ctx,next)=>{
  let body = ctx.request.body;
  let username = body.username;
  let password = body.password;
  password = md5(password);
  console.log(password);
  let row=await tables.admin.findOne({
    where:{
      name: username
    }
  })
  if (!row) {
    ctx.body={
      status: "not found"
    }
    return;
  }
  if (row.password === password) {
    ctx.session.username = username;
    ctx.body = {
      status: "ok"
    };
  } else {
    ctx.body={
      status: "err password"
    }
  }
})

interface GetInfo {
  picAmount: number;
  userAmount: number;
  onlineUsers: number;
  userOnlineTime: number;//second
  dailyAddUser: number;
  usedSpace: number;
  remainSpace: number;
  dailyAddSpace: number;
}
route.get("/getInfo", async (ctx, next) => {   //图片总数量   //按照时间地点对图片分类 //总人数 在线人数
  console.log(ctx.session);
  let picAmount = await tables.photo.count();
  let userAmount = await tables.user.count();
  //在线人数需要接口
  //分类先不搞了
  let usedSpace = await sequelize.query("select sum(size) as count from photo", {
    raw: true,
    type: Sequelize.QueryTypes.SELECT
  });
  //假设总容量30GB
  let remainSpace;//= 32212254720;
  remainSpace =await checkSpace('/').then((diskSpace) => {
    return diskSpace.free;
  });
  let result:GetInfo={
    picAmount,userAmount,usedSpace:parseInt(usedSpace[0].count), remainSpace
    ,onlineUsers:0, userOnlineTime: 0, dailyAddUser: 0, dailyAddSpace: 0
  }
  ctx.body = result;
});
export {route};