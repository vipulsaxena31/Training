const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': ''})
    res.end("Hey!!\n");
});

    const PORT = process.env.PORT || 4000
    server.listen(PORT, () => {
        console.log(`server running on port ${PORT}`)

 });

