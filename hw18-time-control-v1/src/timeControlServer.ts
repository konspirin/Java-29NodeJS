import express from 'express'
import {configuration} from "./app-config/time-control-config.js";
import {accountRouter} from "./routers/accountRouter.js";
import mongoose from "mongoose";


export const launchServer = () => {
    const app = express();
    //=================Mongo Connection===================
    mongoose.connect(configuration.mongo_key).then(() => console.log("Server connected with Mongo"))
        .catch((err: any) => console.log(err))
    //=============Middleware=============================
    app.use(express.json())
    //===============Routing==============================
    app.use('/accounts', accountRouter)
    //===============Server run===========================
    app.listen(configuration.port, () => {
        console.log(`server starts at http://localhost:${configuration.port}` )
    })
}