const { MongoMemoryServer } = require("mongodb-memory-server");
const { prepareApp } = require("./app");
const request = require("supertest");
const Products = require("./models/Products");
const User = require("./models/User");
const mongoose = require("mongoose");
const { main } = require("./seed");

describe("Test", function () {
  let mongod, app;
  const userData = {
    email: "iw.dantsevich@gmail.com",
    password: "Didkps123",
    confirmPassword: "Didkps123",
    name: "Ivan",
  };
  beforeEach(async () => {
    mongod = new MongoMemoryServer();
    const mongoUrl = await mongod.getUri();
    console.log(mongoUrl);
    // const dbModule = require("./models");
    const server = await prepareApp(mongoUrl);
    // await main(mongoUrl);
    // console.log(seed);
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
    const saveUser = await userAdmin.save();

    const res = await app.post("/api/user/login").send({
      email: "iw.dantsevich@gmail.com",
      password: "Didkps",
    });
    expect(res.statusCode).toEqual(400);
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

  //Get user

  test("Get user when not cookie", async function (done) {
    const res = await app.get("/api/user");
    console.log(res.body);
    expect(res.statusCode).toEqual(200);
    done();
  }, 30000);

  //LogOut

  //Products
  test("Get Products", async function () {
    const res = await app.get("/api/products");
    expect(res.statusCode).toEqual(200);
    const products = new Products({});
    console.log(products);
  });
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

  afterAll(async () => {
    await mongod.stop();
  });
});
