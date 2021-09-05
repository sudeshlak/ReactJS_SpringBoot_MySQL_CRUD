import React, {useEffect, useState} from 'react';
import {Button, Row, Col, Table} from 'react-bootstrap';
import EmployeeServices from "../services/EmployeeServices";

const ListEmployee = (props: any) => {
  const [employees, setEmployees] = useState<any[]>([]);

  useEffect(() => {
    EmployeeServices.getEmployees().then((response) => {
      setEmployees(response.data)
    })
  }, []);

  const handleOnUpdate = (id: number) => {
    props.history.push(`/CreateEmployee/${id}`);
  }

  const handleOnView = (id: number) => {
    props.history.push(`/viewEmployee/${id}`);
  }

  const handleOnDelete = (id: number) => {
    EmployeeServices.deleteEmployee(id).then((response) => {
      setEmployees(employees.filter((employee)=>employee.id !== id))
      alert('Deleted' + response.data.id);
    })
  }

  return (
    <Row>
      <Col className='py-3 px-5 text-center'>
        <Table striped bordered hover>
          <thead>
          <tr>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>{
            employees.map((employee: any) =>
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>
                  <Button style={{fontSize: 0.5}}
                          className='px-1 py-1 mx-1'
                          onClick={() => handleOnUpdate(employee.id)} size='sm'
                          variant='info'>Edit</Button>

                  <Button style={{fontSize: 0.5}} className='px-1 py-1' size='sm'
                          onClick={() => handleOnDelete(employee.id)}
                          variant='danger'>Delete</Button>

                  <Button style={{fontSize: 0.5}} className='px-1 py-1 mx-1' size='sm'
                          onClick={() => handleOnView(employee.id)}
                          variant='success'>View</Button>
                </td>
              </tr>)
          }
          </tbody>
        </Table>
      </Col>
    </Row>
  )
    ;
}

export default ListEmployee;