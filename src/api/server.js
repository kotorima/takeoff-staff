const jsonServer = require("json-server");
const auth = require("json-server-auth");
const db = require("./data");
const params = require("./params");

const server = jsonServer.create();
const router = jsonServer.router(db());
const middlewares = jsonServer.defaults({ watch: true });
const rules = auth.rewriter(params.authRoutes);

server.use(middlewares);
server.use(rules);
server.db = router.db;
server.use(auth);
server.use(router);

server.listen(params.port, () => {
    const tab = server.db.getState();
    const serverUrl = `http://localhost:${params.port}`;

    console.log();
    console.log(`API Server is running...`);
    console.log("Home:", serverUrl);
    console.log();
    console.log("Your Tables:");
    for (const key in tab) {
        console.log(`${serverUrl}/${key}`);
    }
    console.log();
    console.log();
});