import * as React from 'react';
import {Form,Button } from 'react-bootstrap/';
import axios from "axios";
import { useState } from 'react';
import {Link} from "react-router-dom";
import { useHistory } from "react-router";

export default function DLogin(){
  const history=useHistory();

  const [user,setuser]=useState({
      email:"",
      password:""
  });

  const logsin =() =>{

    axios.post('http://localhost:5000/dlogin/',user).then((res) => {
    //  setloginuser(res.data.user);
    //  console.log("LOGGED IN USER"+setloginuser);
       alert(res.data.message);
       if(res.data.message == "Login successsful")
             history.push(`/dhome/${res.data.user._id}`);
        

            });
      }
    return(
      <>
        
      <div className='loginpage'>
          <div className='logindiv'>
        <Form>
        <h1 style={{color:"#ebecf1"}}>Doctor Login</h1>
  <Form.Group className="mb-3"  controlId="formBasicEmail">
   
    <Form.Control type="email" value={user.email} onChange={(event) => {setuser({...user,email:event.target.value})
         }}  placeholder="Enter email" />
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">

    <Form.Control type="password" value={user.password} onChange={(event) => {setuser({...user,password:event.target.value})
         }} placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
 <Link to="/home" style={{textDecoration:"none"}}>
  <Form.Text  style={{color:"white"}}>
      Don't have an account? Click to register
    </Form.Text>
    </Link>
  </Form.Group>
  <Button variant="primary" className="btn" onClick={logsin} >
    Login
  </Button>
  
</Form>
</div>
</div>
</>
    );
}