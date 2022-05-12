require('dotenv').config()
const server = require('./api/server.js')
const PORT = process.env.PORT //|| 9000; // allows port to change

if(PORT == null) {
    console.error('no port set')
} else {
    server.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`)
    })
}

