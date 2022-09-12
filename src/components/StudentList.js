import React, { useState, useEffect } from "react";
import { Card, Container, Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import axios from "axios";
export default function StudentList() {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/listStudents")
      .then(response => {
        setStudent(response.data);
      })
      .catch(error => alert(error));
  });
 let  editRecord = (id)=>{
  axios.delete("http://localhost:8080/student/"+ id).then(response=>{
    if(response.data!=null)
    {
    alert("Record delete");
    }
  })
 };
  let deleteRecord= (id)=>{
  axios.delete("http://localhost:8080/student/"+ id).then(response=>{
    if(response.data!=null)
    {
    alert("Record delete");
    }
  })
 };
  return (
    <div className="my-3">
      <Container>
        <Card.Header><h3>Students List</h3></Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Student Id</th>
                <th>Student Name</th>
                <th>Student Address</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody >
               {student.map(student=>{
                return( <tr>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.address}</td>
                  <td>
                  <Button as="input" type="button" value="Edit" onClick={()=>editRecord(student.id)}/>{' '}
                  <Button onClick={()=>deleteRecord(student.id)} as="input" type="button" value="Delete" /></td>
                </tr>)
               })}
            </tbody>
          </Table>
        </Card.Body>
      </Container>
    </div>
  );
}
