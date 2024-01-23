const fs = require('fs');

    
const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title> Enter Message </title></head>');
        res.write('<body><form action="/message" method="POST" ><input type="text" name="message"><button type="submit">SEND</button></input></form></body>');
        res.write('</html>');
        return res.end();
    
    }
    
    if (url === '/message' && method === 'POST') {
        /*
        fs.writeFileSync('message.txt', 'MANEESH LODU');
        res.statusCode = 302;
        res.setHeader('Location' ,'/');
        return res.end();
        */
        const body = [];
    
        req.on('data', (chunk) => {
            body.push(chunk);
            //console.log(chunk);
    
        });
    
        return req.on('end', () => { 
            const parsedBody = Buffer.concat(body).toString();
            //console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            //fs.writeFileSync('message.txt', message);// -->this block the below code untill its done which leads to wait the server if file is big.
           fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
           });
        });
        /*  these statemnts moved inside the event listener due to dependencies bkz listener will respond async
          and res will be sent to client.   bkz these are callbacks 
         res.statusCode = 302;
         res.setHeader('Location', '/');
         return res.end();
         */
    
    }
    
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> My first Web Page</title></head>');
    res.write('<body><h1>Maneesh dalle</h1></body>');
    res.write('</html>');
    res.end();

};

//module.exports = requestHandler;
         //---------equivalent-----//
module.exports={
    handler: requestHandler,
    someText: 'some Harrd code text'
};
      //-----equivalent----//
//module.exports.handler = requestHandler;
//module.exports.someText = 'some hard coded text';
         //----equivalent----- //
//exports.handler = requestHandler;
//exports.someText = 'some hard coded text';