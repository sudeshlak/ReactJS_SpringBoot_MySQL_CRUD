package com.sudeshlak.springboot.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sudeshlak.springboot.model.Employee;

//DATABASE METHODE FIND DELETE  GIVE BY JPAREPOSETARY

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

	 
}
