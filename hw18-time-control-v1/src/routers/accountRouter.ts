import express, {Request, Response} from "express";

import asyncHandler from "express-async-handler"
import {EmployeeDto} from "../model/Employee.js";
import {AccountController} from "../controllers/AccountController.js";
export const accountRouter = express.Router()
const controller = new AccountController();

accountRouter.post('/', asyncHandler(async (req:Request, res:Response) => {
        const body = req.body as EmployeeDto
    const result = await controller.addEmployee(body);
        res.status(201).json(result)
}))