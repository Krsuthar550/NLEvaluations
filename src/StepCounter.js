import React, { useState } from 'react'
import App from './App';
export const multiStep=React.createContext();

export default function StepCounter() {

    const [userData,setUserData]=useState([]);
    const [finalData,setFinal]=useState([]);
    
    function submitData(){
      //  setFinal(userData)
      setFinal(finalData=>[...finalData, userData])
       setUserData(' ')
       console.log(userData);
    }

  return (
    <div>
        <multiStep.Provider value={{userData,setUserData,finalData,setFinal,submitData}} >
           <App/>
        </multiStep.Provider>
    </div>
  )
}
