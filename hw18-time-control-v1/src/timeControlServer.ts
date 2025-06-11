import express from 'express'
import {configuration} from "./app-config/time-control-config.js";


export const launchServer = () => {
    const app = express();
    app.listen(configuration.port, () => {
        console.log(`server starts at http://localhost:${configuration.port}` )
    })
}