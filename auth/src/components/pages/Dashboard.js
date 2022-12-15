import React, { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Navbar from "../ReactRouter/Navbar";
import { AuthContext } from "../store/AuthContext";
const Dashboard = () => {
  const { user, setUser, isLoggedin, setIsLoggedin } = useContext(AuthContext);
  console.log("this user", user);
  const [userDetails, setUserDetails] = useState("");
  const history = useHistory();
  useEffect(() => {
    const storage = localStorage.getItem("user");
    setUser(storage);
    
    if (storage) {
      console.log("inside the dashboard wowo  ni or ssam");
      setIsLoggedin(true);
      history.replace("/");
    }else{
      console.log("inside the else wowo  ni or ssam");

      setIsLoggedin(false);
      history.replace("/signin");

    }
  }, []);
  const profileSubmit = () => {
    history.push("/profile");
  };
  return (
    <>
      <div>
        <Navbar />
        <Container>
          <div className='col-md-12 row'>
            <h2 className='col-md-8'>Welcome user</h2>
            <Button
              className='col-md-2 btn-success'
              onClick={profileSubmit}>
              view profile
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
