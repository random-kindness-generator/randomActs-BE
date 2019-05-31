const request = require("supertest");
const server = require("./server");

describe("server.js", () => {
  //first check to make sure you are testing in the right enviroment
  it("should set the testing enviroment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
  describe("endpoints", () => {
    describe("GET/", () => {
        //test for res.status
      it("should return 200 OK", async () => {
        const res = await request(server).get("/");
        expect(res.status).toBe(200);
      });

      //test for res.type
      it("should return JSON", async () => {
        const res = await request(server).get("/");
        expect(res.type).toBe("application/json");
      });

      //test for res.body
      it("should return { message: 'Server running....' }", async () => {
        const res = await request(server).get("/");
        expect(res.body).toEqual({ message: 'Server running....' });
      });
    });
  });
});
