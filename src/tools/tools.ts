import sequelize from "./sequelizeGenerator";
import {getModels} from "../entities/db.tables";
import {adminAttribute, adminModel} from "../entities/db";
import {Context} from "koa";

const adminTable = getModels(sequelize).admin;
export let authUser = async (username: string) => {
  let admin:adminAttribute[] = await sequelize.query('select * from admin where name=:name', {
    model: adminTable,
    replacements: {
      name: username
    }
  });
  //console.log(admin);
  if (admin.length===0) {
    return false;
  } else {
    return admin[0].name;
  }
};
export const notAuth401=(ctx:any)=>{
  ctx.response.status = 401;
  ctx.response.body={
    message: "not authed"
  }
}