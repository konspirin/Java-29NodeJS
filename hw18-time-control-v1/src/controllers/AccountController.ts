import {AccountingServiceMongoImpl} from "../services/AccountingService/AccountingServiceMongoImpl.js";
import {AccountingService} from "../services/AccountingService/AccountingService.js";
import {EmployeeDto} from "../model/Employee.js";
import {convertEmployeeDtoToEmployee} from "../utils/tools.js";

export class AccountController {
    private service:AccountingService = new AccountingServiceMongoImpl()

    async addEmployee(body: EmployeeDto) {
        const employee = await convertEmployeeDtoToEmployee(body);
        return await this.service.hireEmployee(employee)
    }
}