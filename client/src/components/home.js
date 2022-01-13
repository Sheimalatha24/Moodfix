import * as React from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap/';
import {Link, useParams} from "react-router-dom";
import { useState,useEffect } from 'react';
import {Form,Button } from 'react-bootstrap/';
import { Carousel } from 'react-bootstrap/';
import { useHistory } from 'react-router-dom';

import justrelax from "../audioclips/justrelax.mp3"; 
import intheforest from "../audioclips/intheforest.mp3";
import ambience from "../audioclips/ambience.mp3";
import jason from  "../audioclips/jason.mp3";
import cancion from "../audioclips/cancion.mp3";
import axios from "axios";
import justrelaximg from "../audioclips/relax.jpg"; 
import intheforestimg from "../audioclips/forest.jpg";
import ambienceimg from "../audioclips/ambience.jpg";
import jasonimg from  "../audioclips/jason.jpeg";
import cancionimg from "../audioclips/cancion.jpeg";


import video1 from "../audioclips/v1.mp4";
import video2 from "../audioclips/v2.mp4";
import video3 from "../audioclips/v3.mp4";
import video4 from "../audioclips/v4.mp4";


import {Howl,Howler} from "howler";
import { Details } from './details';
export default function Home({setloginuser}){

  const [user,setuser]=useState({});
 const {id}=useParams();
  
  const [doctorlist,setdoctorlist]=useState([]);
  

const audioclips=[
  {sound: justrelax,label:justrelaximg},
  {sound:intheforest ,label:intheforestimg},
  {sound: ambience,label:ambienceimg},
  {sound:jason ,label:jasonimg},
  {sound:cancion ,label:cancionimg}

];

function soundplay(src){
  const sound=new Howl({
    src
  })
  sound.play();
}
const [status,setstatus]=useState(false);

function handle(){
  setstatus(true);
}
useEffect(() => {
  getAllDoctors();
}, []);
 
const getAllDoctors =  () => {
 axios.get("http://localhost:5000/doctors/").then((response) =>{
  setdoctorlist(response.data);

  
});


 }

 useEffect(() => {
  loadbyid();
}, []);
 
const loadbyid =  () => {

  const uid=id;
 axios.get(`http://localhost:5000/users/${uid}`).then((response) =>{
  setuser(response.data);

  
});
}
    return(
    <>
  
       <Navbar  variant="dark" >
    <Container>
    <Navbar.Brand href="">MoodFix</Navbar.Brand>
    <Nav classNameName="me-auto">
      
      <Nav.Link href="/plogin">Logout</Nav.Link>
     
    </Nav>

    </Container>
  </Navbar>
<b><h1 style={{margin:"2% 0%",fontWeight:"bolder"}}>Welcome {user.name}, hope you have a great day!</h1></b>

<div className='carddoctor' >

     <h1 >Our Professionals</h1>
    <div className="docflex">

{doctorlist.map((doctor,key)=>{
 

  return (
    <div>
    
   
   <Link to={`/details/${doctor._id}/${user._id}`}><img src={doctor.docphoto} alt='helo' ></img></Link> 
   
<b><h6>{doctor.docname}</h6></b>
<h6>{doctor.docspec}</h6>
</div>
  );

})}

</div>
</div>

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
    
    



</>
             
     
    );
}

 