import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../ReactRouter/Navbar";
import { AuthContext } from "../store/AuthContext";
import axios from "axios";
import { Container, Image, Col, Button, Form } from "react-bootstrap";
const Profile = () => {
  const [userDetails, setUserDetails] = useState("");
  const [image, setImage] = useState("");

  const user = localStorage.getItem("user");
  const history = useHistory();
  useEffect(() => {
    const instance = axios.create({
      baseURL: "http://localhost:5000",
      headers: { "X-Custom-Header": `${user}` },
    });
    instance.get("/").then((res) => {
      if (res.data.errormsg) {
        history.push("/signin");
      }
      setUserDetails(res.data.userResult);
    });
  }, []);

  const imageHalndler = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "pexvfrwd");
    data.append("cloud_name", "djrzqc3nc");

    fetch(" https://api.cloudinary.com/v1_1/djrzqc3nc/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const id = userDetails._id;
        const url = data.url;
        fetch(`http://localhost:5000/api/uploadImg/${id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            setUserDetails(data.profile);
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Col className='d-flex justify-content-center'>
          <Image
            className='w-25 h-25'
            rounded
            src={userDetails.image}
          />
        </Col>
        <Col className='d-flex justify-content-center pt-5'>
          <h3>Name:{userDetails.name}</h3>
        </Col>
        <Col className='d-flex justify-content-center '>
          <span>Mobile:{userDetails.mobile}</span>
        </Col>
        <Col className='d-flex justify-content-center '>
          <span>Email:{userDetails.email}</span>
        </Col>

        <Form.Control
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
          className='mt-5'
          type='file'
        />
        <Button onClick={imageHalndler}>add image</Button>
      </Container>
    </div>
  );
};

export default Profile;
