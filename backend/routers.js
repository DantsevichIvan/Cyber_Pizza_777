const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const auth = require("./middleware/auth.middleware");

module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use("/api", require("./routes/api/products/products"));
  app.use("/api", require("./routes/api/categories/categories"));
  app.use("/api", require("./routes/api/user/user"));
};
