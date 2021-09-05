import axios from "axios";

const EMPLOYEE_API_BASE_URL="http://localhost:8080/api/v1/employees";

class EmployeeServices{
  getEmployees(){
    return axios.get(EMPLOYEE_API_BASE_URL)
  }
  createEmployee(employee:any){
    return axios.post(EMPLOYEE_API_BASE_URL,employee);
  }
  getEmployeeById(employeeId:number){
    return axios.get(EMPLOYEE_API_BASE_URL+'/'+employeeId);
  }
  updateEmployee(employee:any,employeeId:number){
    return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId,employee)
  }
  deleteEmployee(employeeId:number){
    return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId)
  }
}
export default new EmployeeServices();