import * as React from 'react';
import {Navbar,Container,Nav,Image, Button,Form} from 'react-bootstrap/';
import {Link} from "react-router-dom";
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';


import axios from "axios";
export  function Details( ){




    const { docid,patientid } = useParams();
    
  

 
    const [formdata,setformdata]=useState({
      name:"",
    age:0,
      probdesc:"",
      docid:docid,
      patient:patientid
    });
    const [doctor,setdoctor]=useState({ });
    const [status,setstatus]=useState(false);

    // doctor={
    //     {
    //         "_id": "5fd21021d230812954b4b49a",
    //         "docname": "Dr.Caroline Mary",
    //         "docemail": "caroline@gmail.com",
    //         "docphoto": "/images/doc1.jpg",
    //         "docspec": "Psychiatrist",
    //         "docqualification": "M.D. in Psychiatry",
    //         "doccontact": 9876754423,
    //         "docpassword": "asdfg123",
    //         "docexperience": "3 years"
    //       }
    
    const afterconsultform={
      type:"New",
      visitnumber:0,
      dateofvisit:"",
      time:"",
      problemstated:formdata.probdesc,
      advicegiven:"",
      dateofnextvisit:"Not yet visited",
      improvementscale:"",
      consultationfee:0,
      doc:docid,
      patient:patientid
  
    }
    useEffect(() => {
        loadbyid();
      }, []);
       
      const loadbyid =  () => {

      
       axios.get(`http://localhost:5000/doctors/${docid}`).then((response) =>{
        setdoctor(response.data);
      
        
      });
    
    

 
      }

      const  addconsultformdatainsert=()=>{

        
        axios.post('http://localhost:5000/afterconsult/',afterconsultform).then((res) => {
       
            
    
                });
      }

      const formsubmit =() =>{

        axios.post('http://localhost:5000/probdesc/',formdata).then((res) => {
        alert("Successfully submitted")
            
        addconsultformdatainsert();
    
                });
          }
function formvisible(){
setstatus(true);
}

    return(
     
        <div className='detailspage'>
           
           <Navbar  variant="dark" >
        <Container>
        <Navbar.Brand href="">MoodFix</Navbar.Brand>
        <Nav className="me-right">
          
          <Nav.Link href={`/home/${patientid}`}>Home</Nav.Link>
         
        </Nav>
    
        </Container>
      </Navbar>
    <div className='detailsdiv'>
        <div className='detailflex'>
        <img className="docpic" src={doctor.docphoto}></img>
        </div>

        <div className='detailflex'>
      
           <h4>Name: {doctor.docname}</h4>
            <h4> Specialization: {doctor.docspec}      </h4>
            <h4>Qualification:{doctor.docqualification}    </h4>
            <h4> Experience: {doctor.docexperience}   </h4>
            <h4>Email: {doctor.docemail} </h4>
            <h4>Contact: {doctor.doccontact}    </h4>
          
            
           <div style={{display:"flex", marginLeft: "60%",marginTop: "5%"}}>
           <Link to={{ pathname: `https://wa.me/${doctor.doccontact}` }} target="_blank" ><img className="wp" src="/images/whatsapp.png" ></img></Link>
            <Button className='detailbtn' onClick={formvisible}>Book Slot</Button>
           </div>
           
                        
        </div>

       

       
    </div>

    <div  >
    {status === true ?    <div className='counselform'>
        <h1 style={{color:"#ebecf1"}}>Can I Know More About You </h1>
        
        <Form>
        <Form.Group className="mb-3"  controlId="formBasicEmail">
   
   <Form.Control type="text"    placeholder="Enter name"  value={formdata.name} onChange={(event) => {setformdata({...formdata,name:event.target.value})
         }}/>
 
 </Form.Group>
 <Form.Group className="mb-3"  controlId="formBasicEmail">
   
   <Form.Control type="text"    placeholder="Enter age"  value={formdata.age} onChange={(event) => {setformdata({...formdata,age:event.target.value})
         }}/>
 
 </Form.Group>
 

 
 <textarea placeholder='Enter problem description' value={formdata.probdesc} onChange={(event) => {setformdata({...formdata,probdesc:event.target.value})
         }} rows="4" cols="135"
          
          />

 
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
 <Link to="/home" style={{textDecoration:"none"}}>

    </Link>
  </Form.Group>
  <Button variant="primary" className="btn"  onClick={formsubmit}>
    Submit
  </Button>
  
</Form>
</div> : null }
 
</div>
  

    </div>
    );
}