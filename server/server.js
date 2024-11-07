const app = require("./main");
const sequelize = require("./db");
const User = require("./models/user");
require("dotenv").config();

sequelize
  .authenticate()
  .then(() => console.log("Connected to database successfully."))
  .catch((err) => console.log(err.message));

sequelize
  .sync({ force: true })
  .then(() => console.log("table created successfully."))
  .catch((err) => console.log(err));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listing on port ${port}.`);
});
