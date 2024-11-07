const app = require("./main");
const sequelize = require("./db")
require("dotenv").config();

sequelize
  .authenticate()
  .then(() => console.log("Connected to database successfully."))
  .catch((err) => console.log(err.message));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listing on port ${port}.`);
});
