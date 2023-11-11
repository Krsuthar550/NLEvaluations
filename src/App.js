import React,{ useContext} from 'react';
import './App.css';
import Adduser from './component/Adduser';
import { multiStep } from './StepCounter';
import ViewData from './component/ViewData';


function App() {
  const {finalData}=useContext(multiStep);
 
  return ( 
    <>
    <div className="App">
    
      <header className='App-Header'>
        <h3 style={{color:'blue',textDecoration:'underline'}}>User Data</h3>
          <Adduser/>
          {finalData.length>0 ? <ViewData/> :''}
          </header>
      
    </div>
    </>
  );
}

export default App;
