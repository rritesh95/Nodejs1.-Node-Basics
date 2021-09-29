const routeHandler = (req, res) => {
    const {url, method} = req;

    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head><title>Sample Title</title></head>');
        res.write('<body><h2>Welcome to sample page.</h2>');
        res.write('<form method="POST" action="/create-user">');
        res.write('<input type="text" name="username"><button type="submit">Send</button></form>');
        res.write('</body></html>');
        return res.end();
    }
    else if( url === '/users'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head><title>Users List</title></head>');
        res.write('<body><h2>Welcome to users list page.</h2>');
        res.write('<ul><li>User 1</li>');
        res.write('<li>User 2</li>');
        res.write('<li>User 3</li>');
        res.write('<li>User 4</li>');
        res.write('</ul></body></html>');
        return res.end();
    }
    else if( url === '/create-user' && method === 'POST'){
        const requestBody = [];
        req.on('data', (chunk) => {
            requestBody.push(chunk);
        })

        return req.on('end', () => {
            const parsedRequest = Buffer.concat(requestBody).toString();
            const inputData = parsedRequest.split('=')[1];
            console.log(inputData);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
        });
    }
};

module.exports = routeHandler;