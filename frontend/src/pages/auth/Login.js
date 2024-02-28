import React, { useState } from 'react'
import Layout from '../../component/Layout'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import {useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';

export default function Login() {
       const [email,setEmail] = useState("")
       const [password,setPassword] = useState("")
       const [auth,setAuth] = useAuth()
       const navigate = useNavigate()
       const location = useLocation()
       async function handleSubmit(e)
       {
         e.preventDefault()
         console.log(email,password)
         try {
          let res = await axios.post(`http://localhost:8000/api/v1/auth/login`,{
            email,password
           })
           if(res.data.message)
           {
            toast.success(res.data.message)
            setAuth({...auth,user:res.data.user,token:res.data.token})
            localStorage.setItem('auth',JSON.stringify(res.data))
            
            setTimeout(() => {
              navigate(location.state || "/")
            }, 1000);
           }
           else
           {
            console.log(res.data.message)
            toast.error(res.data.message)
           }
          
         } catch (error) {
           toast.error(error.data.message)
         }
       

       }

  return (
    <Layout>
        <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <Form className="mt-5" onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="enter email id"
                autoComplete="off"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="enter password"
                autoComplete="off"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </FormGroup>

            <Button color="success" style={{ width: "100%", fontSize: "15px" }}>
                Login
            </Button>
          </Form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </Layout>
  )
}
