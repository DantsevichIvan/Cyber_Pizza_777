require("dotenv").config();
const { prepareApp } = require("./app");
const MONGO_URL = process.env.DB_HOST;

async function start() {
  try {
    const app = await prepareApp(MONGO_URL);
    const port = process.env.PORT || 3000;
    const env = process.env.NODE_ENV || "Development";

    app.listen(port, () =>
      console.log(`server is listing in ${port} - ${env} environment`)
    );
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}
start();
