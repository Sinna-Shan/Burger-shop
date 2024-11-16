const app = require("./app");
require("dotenv").config();
const sequelize = require("./database");
require("./models/associations");

const port = process.env.PORT || 5000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to the database successfully.");

    await sequelize.sync();
    console.log("All models synchronized successfully.");

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (e) {
    console.log(e.message);
  }
})();
