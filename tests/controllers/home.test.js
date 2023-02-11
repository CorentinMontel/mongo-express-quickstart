import {bootstrap} from "../utils";
import request from "supertest";
import server from "../../src";

bootstrap(() => {
    describe("GET /", () => {
        it("should return 200 status code", async () => {
            const res = await request(server).get("/");
            expect(res.statusCode).toBe(200);
        });
    });
})

