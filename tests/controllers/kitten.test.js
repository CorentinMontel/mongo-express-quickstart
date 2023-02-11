import {bootstrap} from "../utils";
import request from "supertest";
import server from "../../src";

bootstrap(() => {
    describe("GET /kittens", () => {
        it("should return 200 status code", async () => {
            const res = await request(server).get("/kittens");
            expect(res.statusCode).toBe(200);
        });
    });

    describe("POST /kittens", () => {
        it("should return 201 status code on valid body", async () => {
            const res = await request(server).post("/kittens").send({name: "Hey"});
            expect(res.statusCode).toBe(201);
        });

        it("should return 400 status code on empty name in body", async () => {
            const res = await request(server).post("/kittens").send({name: ""});
            expect(res.statusCode).toBe(400);
        });

        it("should return 400 status code on missing name in body", async () => {
            const res = await request(server).post("/kittens").send({});
            expect(res.statusCode).toBe(400);
        });
    });
})