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
    console.log();
    console.log(`API Server is running...`);
    console.log("URL:", `http://localhost:${params.port}`);
    console.log();
    console.log();
});