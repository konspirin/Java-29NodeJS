import {AccountingService} from "./AccountingService.js";
import {Employee, EmployeeDto, SavedFiredEmployee} from "../../model/Employee.js";
import {EmployeeModel} from "../../model/mongoSchemas.js";
import {checkFiredEmployees} from "../../utils/tools.js";

export class AccountingServiceMongoImpl implements AccountingService{

    changePassword(empId: string, newPassword: string): Promise<void> {
        return Promise.resolve(undefined);
    }

    fireEmployee(empId: string): Promise<SavedFiredEmployee> {
        throw ""
    }

    getAllEmployees(): Promise<SavedFiredEmployee[]> {
        return Promise.resolve([]);
    }

    getEmployeeById(id: string): Promise<Employee> {
        throw ""
    }

    async hireEmployee(employee: Employee): Promise<Employee> {
        await checkFiredEmployees(employee.id)
            if (await EmployeeModel.findOne({tabNum: employee.table_num}))
                throw new Error(JSON.stringify({
                    status: 409,
                    message: `Employee with tab number ${employee.table_num} already exists`
                }))
                const employeeDoc = new EmployeeModel(employee)
                await employeeDoc.save();
                return employee;
    }

    setRole(newRole: string): Promise<Employee> {
        throw ""
    }

    updateEmployee(empId: string, employee: EmployeeDto): Promise<Employee> {
        throw ""
    }

}