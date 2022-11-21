const port = 8000;
const serverUrl = "http://localhost:" + port;
const authRoutes = {
    "/users*": "/600/users$1",
    "/contacts*": "/640/contacts$1",
};

module.exports = {
    port,
    serverUrl,
    authRoutes,
};