import React, { useEffect, useState } from "react";
import Navbar from "../ReactRouter/AdminNavbar";
import { useHistory, Link } from "react-router-dom";
import { Container, Col, Row, Button, Table } from "react-bootstrap";
import "./css/Signin.css";
const Admin = () => {
  const [users, setUsers] = useState([]);
  const [isLogedIn, setIsLogedIn] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("valid token is here", token);
    fetch("http://localhost:5000/admin/dashboard", {
      headers: {
        "Content-Type": "application/json",
        "X-Custom-Header": `${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("main user isssssssssss", data);
        console.log(data.users);
        setUsers(data.users);
        if (data.errormsg) {
          history.push("/admin/signin");
        }
      });
  }, []);

  const history = useHistory();

  function deleteUser(id) {
    fetch(`http://localhost:5000/admin/remove/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
      });
  }

  return (
    <>
      <Navbar />
      <Container className='text-center'>
        <Row>
          <Table className="tableColor">
            <thead>
             
              <th>User Name</th>
              <th>Email Id</th>
            </thead>
            <tbody>
              { users.map((user) => {
                return (
                  <tr>
                    
                    <td>{user.name}</td>
                    <td>{user.email}</td>

                    <td>
                      <Col className='d-flex'>
                        <Col className=''>
                          <Link to={`/admin/view/${user._id}`}>
                            <Button
                              className='warning'
                              variant='info'>
                              View
                            </Button>
                          </Link>
                        </Col>
                        <Col className=''>
                          <Link to={`/admin/edit/${user._id}`}>
                            <Button
                              className=''
                              variant='warning'>
                              Edit
                            </Button>
                          </Link>
                        </Col>
                        <Col className=''>
                          <Button
                            className=''
                            variant='danger'
                            onClick={() => deleteUser(user._id)}>
                            Delete
                          </Button>
                        </Col>
                      </Col>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
