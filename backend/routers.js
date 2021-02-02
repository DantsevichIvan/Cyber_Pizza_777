const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use("/api", require("./routes/api/products/products"));
  app.use("/api", require("./routes/api/categories/categories"));
  app.use("/api", require("./routes/api/user/user"));
  app.use("/api", require("./routes/api/carts/carts"));
  app.use("/api", require("./routes/api/order/order"));
};
