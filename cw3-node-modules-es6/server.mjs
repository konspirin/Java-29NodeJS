import http from 'http'

const server = http.createServer((request, response) => {
    if(request.url === "/"){
        response.write('Hello world! ');
        response.write('To be or not to be ');
        response.end();
    }
    else if(request.url === "/about"){
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.end('<h1>About Me</h1>')
    }
    else {
        response.writeHead(500, {'Content-Type': 'text/html'})
        response.end('<h2 style="color: red">Error</h2>')
    }
});
try {
    server.listen(3001, () => {
        console.log("Server listen http://localhost:3001")
    })
} catch (e) {
    console.log(e.message)
}