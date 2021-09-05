import React, {useEffect, useState} from 'react';
import {Row, Form, Button, Col} from 'react-bootstrap';
import EmployeeServices from "../services/EmployeeServices";

const CreateUpdateEmployee = (props: any) => {
  const [employeeToUpdateId, setEmployeeToUpdateId] = useState<null | number>(null);

  useEffect(() => {
    if (props.match.params.id === '_add') {
      setFirstName('')
      setLastName('')
      setEmail('')
      setError('')
      setEmployeeToUpdateId(null);
      return;
    }
    setEmployeeToUpdateId(props.match.params.id);
  }, [props.match.params.id]);

  useEffect(() => {
    if (!employeeToUpdateId) {
      return;
    }
    EmployeeServices.getEmployeeById(employeeToUpdateId).then((response) => {
      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
      setEmail(response.data.emailId);
    })
  }, [employeeToUpdateId]);

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const HandleOnSubmitCreateEmployee = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!firstName || !lastName || !email) {
      setError('Not a Valid Employee')
      return;
    }
    if (employeeToUpdateId) {
      const employee: any = {firstName: firstName, lastName: lastName, emailId: email};
      EmployeeServices.updateEmployee(employee, employeeToUpdateId).then(res => {
          alert(res.data.firstName + ' Employee Updated')
          setFirstName('')
          setLastName('')
          setEmail('')
          setError('')
          setEmployeeToUpdateId(null);
        }
      );
    } else {
      const employee: any = {firstName: firstName, lastName: lastName, emailId: email};
      EmployeeServices.createEmployee(employee).then(res => {
          alert(res.data.firstName + ' Employee Created')
          setFirstName('')
          setLastName('')
          setEmail('')
          setError('')
        }
      );
    }
  }
  return (
    <Row>
      <Col className='text-center px-5'>
        <Form onSubmit={HandleOnSubmitCreateEmployee}>
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control value={firstName}
                          onChange={(event) => {
                            setFirstName(event.target.value)
                          }}
                          placeholder="Enter First Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control value={lastName}
                          onChange={(event) => {
                            setLastName(event.target.value)
                          }}
                          placeholder="Enter Last Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control value={email}
                          onChange={(event) => {
                            setEmail(event.target.value)
                          }}
                          placeholder="Enter Last Name"
            />
          </Form.Group>
          <Form.Text className='text-danger pb-2'>{error && error}</Form.Text>
          <Button variant="primary" type="submit">
            {employeeToUpdateId ? "Update" : "Create"}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default CreateUpdateEmployee;