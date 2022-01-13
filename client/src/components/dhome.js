import * as React from 'react';
import {Navbar,Container,Nav,Row,Col,Modal} from 'react-bootstrap/';
import {Link, useParams} from "react-router-dom";
import { useState,useEffect,componentDidMount } from 'react';
import {Form,Button } from 'react-bootstrap/';
import { Carousel } from 'react-bootstrap/';
import { useHistory } from 'react-router-dom';
import justrelax from "../audioclips/justrelax.mp3"; 
import intheforest from "../audioclips/intheforest.mp3";
import ambience from "../audioclips/ambience.mp3";
import jason from  "../audioclips/jason.mp3";
import cancion from "../audioclips/cancion.mp3";
import axios from "axios";
import moment from "moment";
import justrelaximg from "../audioclips/relax.jpg"; 
import intheforestimg from "../audioclips/forest.jpg";
import ambienceimg from "../audioclips/ambience.jpg";
import jasonimg from  "../audioclips/jason.jpeg";
import cancionimg from "../audioclips/cancion.jpeg";
import Calendar from "react-calendar";
import video1 from "../audioclips/v1.mp4";
import video2 from "../audioclips/v2.mp4";
import video3 from "../audioclips/v3.mp4";
import video4 from "../audioclips/v4.mp4";


import {Howl,Howler} from "howler";

export function DHome(){



    

    const {id}=useParams();
  
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
  
   
    const [appointmentlist,setappointmentlist]=useState([]);
   
    
    const [fullobj,setfullobj]=useState({
      
    });
  
    const [patient,setpatient]=useState({});
const [datearr,setdatearr]=useState([]);
      const [mark,setmark]=useState([]);
    const[totalappointmentlist,settotalappointmentlist]=useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const audioclips=[
    {sound: justrelax,label:justrelaximg},
    {sound:intheforest ,label:intheforestimg},
    {sound: ambience,label:ambienceimg},
    {sound:jason ,label:jasonimg},
    {sound:cancion ,label:cancionimg}
  
  ];
  const [status,setstatus]=useState(false);

  function soundplay(src){
    const sound=new Howl({
      src
    })
    sound.play();
  }
console.log("DOCCCCC ID"+id);
  
    
       useEffect(() => {
        getAllappointments();
        gettotalappointments();
       console.log("ist effect ");
     
      
        const a=JSON.parse(localStorage.getItem("arr"));    // a is an array retieving from localstorage
        setmark(a);                                       //finally array variable assigned to mark hook
      },[]);
       
      useEffect(() => {
              console.log("mark array changed");
            localStorage.setItem("arr",JSON.stringify(mark));
      },[mark]);
  
      const  getAllappointments=  () => {
   
       axios.get(`http://localhost:5000/afterconsult/${id}`).then((response) =>{
  
    setappointmentlist(response.data)

        
      });
      
      
       }

       const    gettotalappointments = () => {
   
        axios.get(`http://localhost:5000/doctors/docs/${id}`).then((response) =>{
   
    settotalappointmentlist(response.data);
    
 
    totalappointmentlist.map((single)=>{
      setmark((prev)=>{
        return ([...prev,single.dateofnextvisit]);
      })
      });

 

         
       });
    
       
       
        }
     
               



        

          

     
      const getpatientdetailsbyid =  (pid) => {
        setstatus(true);
        axios.get(`http://localhost:5000/afterconsult/${id}/${pid}`).then((response) =>{
          setfullobj(response.data);    // full complete of appointmentdetails of patient   of particular date
         
          console.log(response.data.patient);
     setpatient({         
      _id:  response.data.patient._id,                                  //directly below cannot access like user.patient._id so for patient object you need only id so assign to separate hook pp
       name:response.data.patient.name,
       age:response.data.patient.age,
       mobile:response.data.patient.mobile,
       type:response.data.patient.type
     });
         
        //directly below cannot access like user.patient._id so for patient object you need only id so assign to separate hook pid
        handleShow();
      
        
      });
      }

      const getappointmentpatientdetailsbyid =  (pid) => {
         
        
        axios.get(`http://localhost:5000/afterconsult/${id}/${pid}`).then((response) =>{
         setfullobj(response.data);    // full complete of appointmentdetails of patient   of particular date
        
         console.log(response.data.patient);
    setpatient({  
      _id:  response.data.patient._id,                                    //directly below cannot access like user.patient._id so for patient object you need only id so assign to separate hook pp
      name:response.data.patient.name,
      age:response.data.patient.age,
      mobile:response.data.patient.mobile,
      type:response.data.patient.type
    });
        
         handleShow1();
       
         
       });
       }



    
    return(
        
        <div className="dochomepage">
        <Navbar  variant="dark" >
    <Container>
    <Navbar.Brand href="">MoodFix</Navbar.Brand>
    <Nav classNameName="me-auto"> 
    <Nav.Link href="/dlogin">Logout</Nav.Link>
      
      
     
    </Nav>

    </Container>
  </Navbar>

  
  
 <div className='main' style={{display:"flex"}}>
  

<div className="patientdetailmain">
<b><h1 style={{marginTop:"2%" ,color:"white"}}>My Patients</h1></b>

<div className="patientdetailsdiv">
{totalappointmentlist.length > 0 ? totalappointmentlist.map((singlepatient)=>{

return (

    <div className='patientdetailflex'>
<div className="overlay">

<img className="image" src={singlepatient.patient.patientprofile} ></img>
<div className="middle">
<Button onClick={()=> {getpatientdetailsbyid(singlepatient.patient._id);}}>View</Button>
</div>
</div>
</div>

);
}):<h4>No Patients Yet </h4>}

 </div>
</div>
<div className='mainflex'>
<h1 style={{color:"white"}}>Todays Appointment</h1>
{ appointmentlist.length > 0 ? appointmentlist.map((singleappointment)=>{
  return (
    <div className='appointmentdiv'>
 <p>Name: {singleappointment.patient.name}</p>
<p>Time: {singleappointment.time}</p>
<Button onClick={()=> {getappointmentpatientdetailsbyid(singleappointment.patient._id);}}>View</Button>
<Link to={{ pathname: `https://wa.me/${singleappointment.patient.mobile}` }} target="_blank" ><img className="wp"  style={{        margin: "3% 40%",width:"35px",height:"35px"}} src="/images/whatsapp.png" ></img></Link>
</div>
  );
} ):<h4 style={{textAlign:"center"}}>No appointments Yet </h4>}



  
</div>
</div>

{/* <Calendar
    
   
    style={{ height: 500}}
  

    tileClassName={({ date, view }) => {
      if(mark.find(x=>x===moment(date).format("YYYY-MM-DD"))){
       return  'highlight'
      }
    }}
></Calendar> */}
<Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Patient Details</Modal.Title>
        </Modal.Header>
        <b><Modal.Body>Name : {patient.name} </Modal.Body></b>
        <b><Modal.Body>Age : {patient.age} </Modal.Body></b>
        <b><Modal.Body>Status : {fullobj.type} </Modal.Body></b>
        <b><Modal.Body>Problem : {fullobj.problemstated} </Modal.Body></b>
        <b><Modal.Body>Last Consulted Date : {fullobj.dateofvisit} </Modal.Body></b>
        <b><Modal.Body>Next Consultation On : {fullobj.dateofnextvisit} </Modal.Body></b>
        <b><Modal.Body>Advice Given : {fullobj.advicegiven} </Modal.Body></b>
        <b><Modal.Body>Patient  Contact : {patient.mobile} </Modal.Body></b>
        <Link to={{ pathname: `https://wa.me/${patient.mobile}` }} target="_blank" ><img className="wp"  style={{    margin: "2% 40%"}} src="/images/whatsapp.png" ></img></Link>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        

        
        </Modal.Footer>
      </Modal>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Patient Details</Modal.Title>
        </Modal.Header>
        <b><Modal.Body>Name : {patient.name}</Modal.Body></b>
        <b><Modal.Body>Age : {patient.age}</Modal.Body></b>
        <b><Modal.Body>Status : {fullobj.type}</Modal.Body></b>
        <b><Modal.Body>Problem : {fullobj.problemstated}</Modal.Body></b>
        <b><Modal.Body>Next Consultation On : {fullobj.dateofnextvisit} </Modal.Body></b>
        <b><Modal.Body>Mobile : {patient.mobile}</Modal.Body></b>
        <Link to={{ pathname: `https://wa.me/${patient.mobile}` }} target="_blank" ><img className="wp"  style={{        margin: "3% 40%",width:"50px",height:"50px"}} src="/images/whatsapp.png" ></img></Link>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         <Link to={`/afterconsultform/${id}/${patient._id}`}><Button variant="secondary" onClick={handleClose} >
         Edit Details
          </Button></Link> 

        
        </Modal.Footer>
      </Modal>


     

      <div className='cardservices'>

<h1 >We Create You Inspire</h1>

<div className="serviceflex">
  <div className='videodiv'>
     <video width="500" height="300" controls>
            <source src={video1} type="video/mp4"/>
            <source src="v1.ogg" type="video/ogg"/>
          Your browser does not support the video tag.
          </video>
   </div>
   <div className='videodiv'>
    <video width="500" height="300" controls>
            <source src={video3} type="video/mp4"/>
            <source src="v3.ogg" type="video/ogg"/>
          Your browser does not support the video tag.
          </video>
      </div>
    <div className='videodiv'>
    <video width="500" height="300" controls>
            <source src={video2} type="video/mp4"/>
            <source src="v2.ogg" type="video/ogg"/>
          Your browser does not support the video tag.
          </video>
      </div>

      <div className='videodiv'>
    <video width="500" height="300" controls>
            <source src={video4} type="video/mp4"/>
            <source src="v4.ogg" type="video/ogg"/>
          Your browser does not support the video tag.
          </video>
      </div>

      
      
  </div>
  </div>
  <div className='cardservices'>
  <h1 >Let the Music Speak!</h1>
  <div className="serviceflex">
    {audioclips.map((soundobj,index)=>{
      return (
        <div className='videodiv' >
        <img src={soundobj.label} style={{width:"220px",height:"220px",borderRadius:"50%"}} onClick={()=> soundplay(soundobj.sound)} ></img><br></br>
        
     </div>
      );
    })}
    
    </div>
      </div>
  </div>);
}