import * as React from 'react';
import Button from 'react-bootstrap/Button';
import {Navbar,Container,Nav} from 'react-bootstrap/';
import doclink from "../audioclips/doc.png";
import {Link} from "react-router-dom";
export default function Navtemplate({setloginuser}){

    return(
        <>
 <div className='profilechosingpage'>
<Navbar    >
    <Container>
    <Navbar.Brand href="">MoodFix</Navbar.Brand>
    <Nav className="me-right">
   
      
     
    </Nav>

    </Container>
  </Navbar>
 
  <div  className="icondiv">

  <h1 style={{color:"#ebecf1"}} >Choose Your Account</h1>
  <Link to="/dlogin"><img style={{width:"200px",marginRight:"15%"}} src={doclink}/></Link>
  <Link to="/plogin"><img style={{width:"230px",height:"200px"}} src="patient.png"/></Link>
  </div>
  </div>

      </>
    );
}