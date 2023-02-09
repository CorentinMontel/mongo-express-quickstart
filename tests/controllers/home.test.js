const mongoose = require("mongoose");
const request = require("supertest");
import server from "../../src/index";

afterAll(done => {
    server.close();
    done();
});

describe("GET /", () => {
    it("should return 200 status code", async () => {
        const res = await request(server).get("/");
        expect(res.statusCode).toBe(200);
    });
});

