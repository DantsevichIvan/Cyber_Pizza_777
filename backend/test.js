const { MongoMemoryServer } = require("mongodb-memory-server");
const { prepareApp } = require("./app");
const request = require("supertest");
const Products = require("./models/Products");
const User = require("./models/User");
const mongoose = require("mongoose");
// const { main } = require("./seed");

const userData = {
  email: "iw.dantsevich@gmail.com",
  password: "Didkps123",
  confirmPassword: "Didkps123",
  name: "Ivan",
};

describe("Test", function () {
  let mongod, app;

  beforeEach(async () => {
    mongod = new MongoMemoryServer();
    const mongoUrl = await mongod.getUri();
    console.log(mongoUrl);
    // await main(mongoUrl);
    const server = await prepareApp(mongoUrl);
    app = request(server);
  });

  //Registration
  test("Validation password", async function (done) {
    const res = await app
      .post("/api/users")
      .send({ email: "", password: "Didkps", confirmPassword: "Didkps123" });
    expect(res.statusCode).toEqual(400);
    done();
  }, 30000);
  test("validation required", async function (done) {
    const res = await app.post("/api/users").send({
      email: "iw.dantsevich@gmail.com",
      password: "Didkps123",
      confirmPassword: "Didkps123",
    });
    console.log(res.error);
    expect(res.statusCode).toEqual(400);
    done();
  }, 30000);
  test("Add new user", async function (done) {
    const res = await app.post("/api/users").send({
      email: "iw.dantsevich@gmail.com",
      password: "Didkps123",
      confirmPassword: "Didkps123",
      name: "Ivan",
    });
    expect(res.statusCode).toEqual(200);
    // const cookieHeader = get(res, 'headers.set-cookie.0') ??
    const userCount = await mongoose.model("User").countDocuments();
    expect(userCount).toEqual(1);
    done();
  }, 30000);
  test("validation email", async function (done) {
    const res = await app.post().send({ email: "iw.dantsevichgmail" });
  }, 30000);
  test("Create user with an existing one email", async function () {
    const res = await app.post("/api/users").send({
      email: "iw.dantsevich@gmail.com",
      password: "Didkps",
      name: "Ivan",
      confirmPassword: "Didkps",
    });
    expect(res.statusCode).toEqual(400);
  }, 30000);
  //Cookie?
  //Login
  test("User submit empty form", async function (done) {
    const res = await app.post("/api/user/login").send({
      email: "",
      password: "",
    });
    expect(res.statusCode).toEqual(400);
    done();
  }, 30000);
  test("User submit incorrect password", async function (done) {
    const userAdmin = new User({ userData });
    await userAdmin.save();

    const res = await app.post("/api/user/login").send({
      email: "iw.dantsevich@gmail.com",
      password: "Didkps",
    });
    expect(res.statusCode).toEqual(400);
    console.log(res.body);
    done();
  }, 30000);
  test("User login in system", async function (done) {
    const userAdmin = new User({ userData });
    const saveUser = await userAdmin.save();

    const res = await app.post("/api/user/login").send({
      email: "iw.dantsevic@gmail.com",
      password: "Didkps",
    });
    expect(res.statusCode).toEqual(200);
    done();
  }, 30000);
  test("User submit incorrect email", async function (done) {
    const userAdmin = new User({ userData });
    const saveUser = await userAdmin.save();

    const res = await app.post("/api/user/login").send({
      email: "iw.dantsevic@gmail.com",
      password: "Didkps",
    });
    expect(res.statusCode).toEqual(400);
    done();
  });
  //Get user

  test("Get user when not cookie", async function (done) {
    const res = await app.get("/api/user");
    expect(res.statusCode).toEqual(200);
    done();
  }, 30000); // ???

  //LogOut
  test("Cookie remove", async (done) => {
    const res = await app.post("/api/user/logout");
    expect(res.statusCode).toEqual(200);
    done();
  }, 30000);

  //Products
  test("Get Products", async function (done) {
    const res = await app.get("/api/products");
    expect(res.statusCode).toEqual(200);
    const productsCount = await mongoose.model("Products").countDocuments();
    expect(productsCount).toEqual(0);
    done();
  }, 30000);

  test("Add new product", async function () {
    let product = {
      name: "paperoni",
      price: 1000,
      description: "chees, becon",
      weight: 10,
      image: "dadsad",
    };
    const res = await app.post("/api/products").send({ product });
    expect(res.statusCode).toEqual(200);
  });

  //Categories
  test("Get Categories", async function (done) {
    const res = await app.get("/api/categories");
    expect(res.statusCode).toEqual(200);
    const categoriesCount = await mongoose.model("Categories").countDocuments();
    expect(categoriesCount).toEqual(0);
    done();
  }, 30000);

  afterEach(async () => {
    await mongod.stop();
  });
});
