import * as mongoose from "mongoose";
import {Role} from "../utils/timeControlTypes.js";
import {Employee} from "./Employee.js";

export const EmployeeMongoSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    id: {type: String, required: true},
    tabNum:{type:String, required: true},
    roles:{type:[String], enum: Role, required: true},
    passHash:{type:String, required: true}
}, {versionKey:false})

export const EmployeeModel = mongoose.model<Employee>('Employees', EmployeeMongoSchema, 'employees_accounting')

export const FiredEmployeeMongoSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    id: {type: String, required: true},
    tabNum:{type:String, required: true},
    firedDate: {type:String, required: true}
}, {versionKey:false})

export const FiredEmployeeModel = mongoose.model('Fired', FiredEmployeeMongoSchema, 'fired_emp_collection')