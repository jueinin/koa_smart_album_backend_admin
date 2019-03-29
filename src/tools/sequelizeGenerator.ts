import Sequelize from 'sequelize'

let sequelize = new Sequelize.Sequelize({
  host: "localhost",
  dialect: "mysql",
  database: "newbee_smart_album",
  username: "root",
  password: "chenliang"
})
export default sequelize;