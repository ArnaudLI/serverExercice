const http = require('http');
const app = require('./app')

const PORT = 8000;

const server = http.createServer(app);

server.listen(process.env.PORT || PORT, function() {
    console.log(`en ecoute sur ${PORT}`);
})
