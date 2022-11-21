import express from 'express';
require('dotenv').config()

const app = express();
const port = process.env.PING_LISTEN_PORT || 3000

app.all('/ping', (req, res) => {
    var HostName:any = req.hostname;
    if(req.method == 'GET'){
        res.header('Content-Type', 'application/json')
        res.json(req.headers);
        console.log(`Hôte:`,HostName)
    } else  {
        res.sendStatus(500);
    }
})

app.listen(port, () => {
    console.log(`The application is listening on port ${port}`);
})
