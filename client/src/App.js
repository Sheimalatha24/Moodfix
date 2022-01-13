

import Home from './components/home';
import PLogin from './components/patientlogin';
import DLogin from './components/doctorlogin';
import { DHome } from './components/dhome';
import Nav from './components/nav';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Navtemplate from './components/nav';
import { useState } from 'react';
import Register from './components/register';
import { Details  } from './components/details';
import 'react-calendar/dist/Calendar.css';
import Afterconsultform from './components/afterconsult';
function App( ) {

  const [loginuser,setloginuser]=useState({});



  return (
    <div className="App" >
      <Router>  
     <Switch>
          <Route  exact path ='/'><Navtemplate  setloginuser={setloginuser}/> </Route>
          <Route  path ='/home/:id'><Home  setloginuser={setloginuser}/> </Route>
          <Route  path ='/plogin'><PLogin setloginuser={setloginuser} height="100px"  /></Route>
          <Route  path ='/dlogin'><DLogin  /></Route>
          <Route  path ='/dhome/:id'><DHome  /></Route>
          <Route  path ='/register'><Register  /></Route>
          <Route  path ='/afterconsultform/:id1/:id2'><Afterconsultform /></Route>

          <Route  path ='/details/:docid/:patientid'><Details  setloginuser={setloginuser}/></Route>
          <Route path='/privacy-policy' component={() => { 
     window.location.href = 'https://example.com/1234'; 
     return null;
}}/>
          </Switch>
      </Router>
  
    </div>
  );
}

export default App;
