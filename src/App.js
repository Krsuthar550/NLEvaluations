import React,{ useContext} from 'react';
import './App.css';
import Adduser from './component/Adduser';
import { multiStep } from './StepCounter';
import ViewData from './component/ViewData';


function App() {
  const {userData}=useContext(multiStep);
 
  return ( 
    <>
    <div className="App">
    
      <header className='App-Header'>
        <h3 style={{color:'blue'}}>User Data</h3>
          <Adduser/>
          {userData.length>0 ? <ViewData/> :''}
          </header>
      
    </div>
    </>
  );
}

export default App;
