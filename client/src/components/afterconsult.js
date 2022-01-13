import * as React from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap/';
import {Link, useParams} from "react-router-dom";
import { useState,useEffect } from 'react';
import {Form,Button } from 'react-bootstrap/';
import { Carousel } from 'react-bootstrap/';
import Navtemplate from './nav';
import axios from "axios";

export default function Afterconsultform(){


   
    const {id1,id2}=useParams();
  
    const [patient,setpatient]=useState({})
 
     const resetform =()=>{
         setpatient({
            type:"",
              visitnumber:1,
              dateofvisit:"",
              time:"",
              problemstated:"",
              advicegiven:"",
              dateofnextvisit:"",
              improvementscale:"",
            consultationfee:0,
            doc:id1,
            patient:id2})
     } 

     useEffect(() => {
        getappointmentpatientdetailsbyid();
      }, []);

     const getappointmentpatientdetailsbyid =  (pid) => {
         
        
        axios.get(`http://localhost:5000/afterconsult/${id1}/${id2}`).then((response) =>{
         setpatient(response.data);    // full complete of appointmentdetails of patient   of particular date
        
  
         
       });
       }
    const formsubmit =() =>{

        axios.put(`http://localhost:5000/afterconsult/${id1}/${id2}`,patient).then((res) => {
        alert("Successfully updated");
            
    
                });
          }

         


    return(
        <>


        <div className="afterconsultpage">
        <Navbar  variant="dark" >
    <Container>
    <Navbar.Brand href="">MoodFix</Navbar.Brand>
    <Nav className="me-right"> 

      
    <Nav.Link href={`/dhome/${id1}`}>Home</Nav.Link>
     
    </Nav>

    </Container>
  </Navbar>
        <div className='afterconsultform'>
        <h1 style={{color:"black"}}>Patient Improvement Details</h1>
        <div className='consultform'>
        
        <Form>
        <Form.Group className="mb-3"  controlId="formBasicEmail">
        <Form.Label>Status: </Form.Label>
        <Form.Select value={patient.type} onChange={(event) => {setpatient({...patient,type:event.target.value})
         }} >
            <option>Status of the patient</option>
            <option value="new">New</option>
            <option value="current">Current</option>
            <option value="closed">Closed</option>
        </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3"  >
        <Form.Label>Visit Number: </Form.Label> <Form.Control type="text" value={patient.visitnumber} onChange={(event) => {setpatient({...patient,visitnumber:event.target.value})
         }} />
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Date of Visit: </Form.Label> <Form.Control  value={patient.dateofvisit} onChange={(event) => {setpatient({...patient,dateofvisit:event.target.value})
         }}  type="date"/>
        </Form.Group>



        <Form.Group className="mb-3"  >
        <Form.Label>Problem Stated: </Form.Label> <Form.Control value={patient.problemstated} onChange={(event) => {setpatient({...patient,problemstated:event.target.value})
         }} as="textarea" rows={3}/>
        </Form.Group>

        <Form.Group className="mb-3"  >
        <Form.Label>Advice Given: </Form.Label> <Form.Control value={patient.advicegiven} onChange={(event) => {setpatient({...patient,advicegiven:event.target.value})
         }} as="textarea" rows={3}/>
        </Form.Group>

        <Form.Group className="mb-3"  >
        <Form.Label>Date of Next Visit: </Form.Label> <Form.Control value={patient.dateofnextvisit} onChange={(event) => {setpatient({...patient,dateofnextvisit:event.target.value})
         }} type="date"/>
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Time: </Form.Label> <Form.Control    value={patient.time} onChange={(event) => {setpatient({...patient,time:event.target.value})
         }} type="time"/>
        </Form.Group>

        <Form.Group className="mb-3"  controlId="formBasicEmail">
        <Form.Label>Improvement Scale: 1-Poor  10-Excellent</Form.Label>
        {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
            <Form.Check 
                inline 
                label="1"
                value="1" onChange={(event) => {setpatient({...patient,improvementscale:event.target.value})
         }} 
                name="group1"
                type={type}
                id={`inline-${type}-1`}
            />
            <Form.Check
                inline
                label="2"
                value="2"
                 onChange={(event) => {setpatient({...patient,improvementscale:event.target.value})
         }} 
                name="group1"
                type={type}
                id={`inline-${type}-2`}
            />
            <Form.Check
                inline
                label="3"
                value="3"
                name="group1"
                 onChange={(event) => {setpatient({...patient,improvementscale:event.target.value})
         }} 
                type={type}
                id={`inline-${type}-3`}
            />
            <Form.Check
                inline
                label="4"
                value="4"
                name="group1"
                onChange={(event) => {setpatient({...patient,improvementscale:event.target.value})
         }} 
                type={type}
                id={`inline-${type}-4`}
            />
            <Form.Check
                inline
                label="5"
                value="5"
                name="group1"
               onChange={(event) => {setpatient({...patient,improvementscale:event.target.value})
         }} 
                type={type}
                id={`inline-${type}-5`}
            />
            <Form.Check
                inline
                label="6"
                value="6"
                onChange={(event) => {setpatient({...patient,improvementscale:event.target.value})
         }} 
                name="group1"
                type={type}
                id={`inline-${type}-6`}
            />
            <Form.Check
                inline
                label="7"
                value="7"
                onChange={(event) => {setpatient({...patient,improvementscale:event.target.value})
         }} 
                name="group1"
                type={type}
                id={`inline-${type}-7`}
            />
            <Form.Check
                inline
                label="8"
                value="8"
                onChange={(event) => {setpatient({...patient,improvementscale:event.target.value})
         }} 
                name="group1"
                type={type}
                id={`inline-${type}-8`}
            />
            <Form.Check
                inline
                label="9"
                 value="9" onChange={(event) => {setpatient({...patient,improvementscale:event.target.value})
         }} 
                name="group1"
                type={type}
                id={`inline-${type}-9`}
            />
            <Form.Check
                inline
                onChange={(event) => {setpatient({...patient,improvementscale:event.target.value})
         }} 
                label="10"
                value="10"
                name="group1"
                type={type}
                id={`inline-${type}-10`}
            />
            </div>
        ))}
        </Form.Group>

        {/* <Form.Group className="mb-3"  controlId="formBasicEmail">
        <Form.Label>Badge: </Form.Label>
        <div className='badges'>
            <img src="/images/bdg1.jpeg"></img>
            <img src="/images/bdg2.jpeg"></img>
            <img src="/images/bdg3.jpeg"></img>
            <img src="/images/bdg4.jpeg"></img>
            <img src="/images/bdg5.jpeg"></img>
            <img src="/images/bdg6.jpeg"></img>
           
        </div>
        </Form.Group> */}

        <Form.Group className="mb-3"  >
        <Form.Label>Consultation Fee Paid:  Rs. </Form.Label> <Form.Control value={patient.consultationfee} onChange={(event) => {setpatient({...patient,consultationfee:event.target.value})
         }} type="text"/>
        </Form.Group>

        <Button variant="primary" className="btn" onClick={resetform}  style={{marginLeft:"70%",marginRight:"4%"}}>Clear</Button>

        <Button variant="primary" className="btn" onClick={formsubmit} >Update</Button>
        
        </Form>
        </div> 
        </div>
        </div>
        </>);}