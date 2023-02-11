import server from "../src/index";

export function bootstrap(fn) {
    afterAll(done => {
        server.close();
        done();
    });

    fn()
}