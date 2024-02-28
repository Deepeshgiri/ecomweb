import React, { useState } from "react";
import Layout from "../../component/Layout";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import toast from 'react-hot-toast';
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Registration = () => {
  const navigate = useNavigate()
  let [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  function handleInput(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      
     const res = await  axios.post(`http://localhost:8000/api/v1/auth/register`, data);
      if(res.data.success)
      {
        console.log(data);
        toast.success(res.data.message)
        setTimeout(() => {
          navigate('/login')
        }, 1000); 
      }
    
      else{
        toast.error(res.data.message)
      }
    } catch (error) {
         console.log(error)
         toast.error("something went wrong")
    }
   
  }
  return (
    <Layout>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <Form className="mt-2" onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="exampleName">Name</Label>
              <Input
                type="text"
                name="name"
                value={data.name}
                onChange={handleInput}
                id="exampleName"
                placeholder="enter name"
                autoComplete="off"
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                value={data.email}
                onChange={handleInput}
                id="exampleEmail"
                placeholder="enter email id"
                autoComplete="off"
              />
            </FormGroup>

            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                value={data.password}
                onChange={handleInput}
                id="examplePassword"
                placeholder="enter password"
                autoComplete="off"
              />
            </FormGroup>

            <FormGroup>
              <Label for="examplePhone">Phone</Label>
              <Input
                type="text"
                name="phone"
                value={data.phone}
                onChange={handleInput}
                id="examplePhone"
                placeholder="enter phone no"
                autoComplete="off"
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleAddress">Address</Label>
              <Input
                type="text"
                name="address"
                value={data.address}
                onChange={handleInput}
                id="exampleAddress"
                autoComplete="off"
                placeholder="enter your address here..."
              />
            </FormGroup>

            <Button color="success" style={{ width: "100%", fontSize: "15px" }}>
              Register
            </Button>
          </Form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </Layout>
  );
};
