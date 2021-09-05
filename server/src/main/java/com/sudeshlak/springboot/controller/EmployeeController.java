package com.sudeshlak.springboot.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sudeshlak.springboot.exeption.ResourceNotFoundExcepction;
import com.sudeshlak.springboot.model.Employee;
import com.sudeshlak.springboot.repository.EmployeeRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {


	@Autowired
	private EmployeeRepository employeeRepository;

	//get all employees
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}

	//Create new employee
	//@RequestBody  json mapto employee
	@PostMapping("/employees") 
	public Employee createEmployee(@RequestBody Employee employee) { 
		return employeeRepository.save(employee);
	}

	//get employee by id
	@GetMapping("/employees/{id}") 
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) { 

		Employee employee = employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundExcepction("Employee not exeed with ID :"+id));
		return ResponseEntity.ok(employee);			
	}

	//update employee
	@PutMapping("employees/{id}")
	public ResponseEntity<Employee> updateEmployee (@PathVariable Long id,@RequestBody Employee employeeDeatils){
		Employee employee=employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundExcepction("Employee not exists with id : "+id));
		employee.setFirstName(employeeDeatils.getFirstName());
		employee.setLastName(employeeDeatils.getLastName());
		employee.setEmailId(employeeDeatils.getEmailId());

		Employee UpdatedEmployee = employeeRepository.save(employee);
		return ResponseEntity.ok(UpdatedEmployee);
	}

	//deleteEmployee
	@DeleteMapping("employees/{id}")
	public ResponseEntity<Map<String,Boolean>> daleteEmployee(@PathVariable Long id){
		Employee employee=employeeRepository.findById(id).orElseThrow(()->new ResourceNotFoundExcepction("Employee not exists with id : "+id));
		employeeRepository.delete(employee);
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
	}




}
