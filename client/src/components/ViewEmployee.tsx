import React, {useEffect, useState} from 'react';
import {Row, Col, Card} from "react-bootstrap";
import EmployeeServices from "../services/EmployeeServices";

const ViewEmployee = (props: any) => {
  const [employee, SetEmployee] = useState<any>(null);

  useEffect(() => {

    EmployeeServices.getEmployeeById(props.match.params.id).then((response) => {
      SetEmployee(response.data);
    })
  }, []);

  return (
    <Row>
      <Col className='mx-5'>
        <Card className="text-center">
          <Card.Header>Hi!</Card.Header>
          <Card.Body>
            <Card.Title>{employee && employee.firstName} {employee && employee.lastName}</Card.Title>
            <Card.Text>
              {employee && employee.emailId}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">Hi!</Card.Footer>
        </Card>
      </Col>

    </Row>
  );
};

export default ViewEmployee;