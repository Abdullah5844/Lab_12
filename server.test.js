const request = require("supertest");
const app = require("./routes/user");
const mongoose = require("mongoose");
const { connect } = require("superagent");
const { config } = require("dotenv");

describe("Test Add User", () => {
  test("should create a new post", () => {
    const res = request(app).post("http://localhost:8000/user/add").send({
      Name: "Myhammad Abdullah",
      Email: "i200867@nu.edu.pk",
      Age: "21",
      Contact: "GHQ",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("post");
  });
});

describe("Test the delete path", () => {
  test("It should response the Delete method", () => {
    const response = request(app).delete("http://localhost:8000/user/:637c89e80dccb3a2139b5ff5");
    expect(response.statusCode).toBe(200);
  });
});

describe("Test the user added", () => {
  test("It should response the UserAdded method", () => {
    const response = request(app)
      .get("http://localhost:8000/user/:637c89e80dccb3a2139b5ff5")
      .send({ Name: "Muhammad Abdullah" });
    expect(response.body.toEqual("Muhammad Abdullah").statusCode).toBe(200);
  });
});
