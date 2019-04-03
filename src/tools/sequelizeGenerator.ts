import Sequelize from 'sequelize'

let sequelize = new Sequelize.Sequelize({
  host: "localhost",
  dialect: "mysql",
  database: "newbee_smart_album",
  //database: "smart_album",
  username: "root",
  //password: "GYf51610532",
  password: "chenliang",
  define: {
    timestamps: false,
  }
});
export default sequelize;