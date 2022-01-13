import * as React from 'react';
import {Form,Button } from 'react-bootstrap/';
import axios from "axios";
import { useState } from 'react';
import {Link} from "react-router-dom";
import { useHistory } from "react-router";

export default function Register(){
const history=useHistory();
    const [user,setuser]=useState({
        name:"",
        email:"",
        mobile:0,
        patientprofile:"/images/default.png",
        password:"",
        type:""
    });

    const register=() =>{  

      axios.post('http://localhost:5000/register/',user).then((res) => {
      //  setloginuser(res.data.user);
         alert(res.data.message);
        history.push("/plogin")
          
  
              });
        }
    return(
      <div className='loginpage'>
        <div  className="logindiv">
        <h1 style={{color:"white"}}>Register</h1>
        <Form>
  <Form.Group className="mb-3"  >
   
    <Form.Control type="text" value={user.name} onChange={(event) => {setuser({...user,name:event.target.value})
         }}  placeholder="Enter Name" />
  
  </Form.Group>

  <Form.Group className="mb-3"  >
   
    <Form.Control type="text" value={user.age} onChange={(event) => {setuser({...user,age:event.target.value})
         }}  placeholder="Enter Age" />
  
  </Form.Group>


  <Form.Group className="mb-3"  controlId="formBasicEmail">
   
    <Form.Control type="email" value={user.email} onChange={(event) => {setuser({...user,email:event.target.value})
         }}  placeholder="Enter Email" />
  
  </Form.Group>
  <Form.Group className="mb-3"  >
        <Form.Label>Status: </Form.Label>
        <Form.Select value={user.type} onChange={(event) => {setuser({...user,type:event.target.value})
         }} >
            <option>Status of the patient</option>
            <option value="new">New</option>
            <option value="current">Current</option>
            <option value="closed">Closed</option>
        </Form.Select>
        </Form.Group>
  <Form.Group className="mb-3"  >
   
    <Form.Control type="text" value={user.mobile} onChange={(event) => {setuser({...user,mobile:event.target.value})
         }}  placeholder="Enter Contact" />
  
  </Form.Group>

  <Form.Group className="mb-3" >

    <Form.Control type="password" value={user.password} onChange={(event) => {setuser({...user,password:event.target.value})
         }} placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  </Form.Group>
  <Button variant="primary" className="btn" onClick={register} >
   Register
  </Button>
  
</Form>
</div>
</div>
    );
}