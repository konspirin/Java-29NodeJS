import {Employee, EmployeeDto, SavedFiredEmployee} from "../../model/Employee.js";

export interface AccountingService {
    hireEmployee: (employee: EmployeeDto) => Employee;
    fireEmployee: (empId:string) => SavedFiredEmployee;
}