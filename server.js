const { createServer } = require("./app");
const { SERVER } = require("./src/config");

const app = createServer();

app.listen(SERVER.localPort, () => {
    console.log(`listening on http://localhost:${SERVER.localPort}`);
});