import React,{useContext, useState} from 'react';
import { Button,TextField } from '@material-ui/core'
import {FormGroup,Typography,styled} from "@mui/material"
import { multiStep } from '../StepCounter';

const Form=styled(FormGroup)`
width:60%;
margin: 10% auto 0 auto;
& div{
    margin-top:20px
}
`

export default function Adduser() {
    const {userData,setUserData,submitData}=useContext(multiStep)
  
    const [currentStep, setCurrentStep] = useState(1);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
      };
      const nextStep = () => {
        setCurrentStep(currentStep + 1);
      };
    
      const prevStep = () => {
        setCurrentStep(currentStep - 1);
      };
     
  return (
    <Form onSubmit={handleSubmit}>
        {currentStep===1 &&(
            <>
            <Typography varient='h2'>AddUser</Typography>
     <div>
     <label>Full Name</label>
        <TextField label="Name" value={userData["name"]}  onChange={(e)=>setUserData({...userData,"name":e.target.value})} type='text' margin='normal' variant='outlined' color='secondary' />
     </div>
     <div>
     <label>Date of Birth</label>
        <TextField label="Date" value={userData["date"]}  onChange={(e)=>setUserData({...userData,"date":e.target.value})} type='date' margin='normal' variant='outlined' color='secondary' />
     </div>
     <div>
     <label>Email</label>
        <TextField label="Email" value={userData["email"]}  onChange={(e)=>setUserData({...userData,"email":e.target.value})} type='email' margin='normal' variant='outlined' color='secondary' />
     </div>
     <div>
    <label>Phone Number</label>
        <TextField label="Phone Number" value={userData["number"]}  onChange={(e)=>setUserData({...userData,"number":e.target.value})}  type= 'number'  margin='normal' variant='outlined' color='secondary' />
     </div>
     <div>
        <Button varient='contained' color='primary' onClick={nextStep}>Next</Button>
     </div>
     </>
        )}
        {currentStep===2 && (
            <>
            <div>
                <label>Address</label>
        <TextField label="Area" value={userData["area"]}  onChange={(e)=>setUserData({...userData,"area":e.target.value})}  type='text' margin='normal' variant='outlined' color='secondary' />
     </div>
     <div>
        <TextField label="City" value={userData["city"]}  onChange={(e)=>setUserData({...userData,"city":e.target.value})}type='text' margin='normal' variant='outlined' color='secondary' />
     </div>
     <div>
        <TextField label="District" value={userData["district"]}  onChange={(e)=>setUserData({...userData,"district":e.target.value})} type='text' margin='normal' variant='outlined' color='secondary' />
     </div>
     <div>
        <TextField label="State" value={userData["state"]}  onChange={(e)=>setUserData({...userData,"state":e.target.value})} type='text' margin='normal' variant='outlined' color='secondary' />
     </div>
     <div>
        <TextField label="Pincode" value={userData["pincode"]}  onChange={(e)=>setUserData({...userData,"pincode":e.target.value})} type='number' margin='normal' variant='outlined' color='secondary' />
     </div>
     <div>
        <Button varient='contained' color='primary' onClick={prevStep}>Preview</Button>
     </div>
     <div>
        <Button varient='contained' color='primary' onClick={nextStep}>Next</Button>
     </div>
            </>
        )}
         {currentStep===3 && (
            <>
            <div>
                <label>Your Likes And Dislikes</label>
        <TextField label="Likes" value={userData["likes"]}  onChange={(e)=>setUserData({...userData,"":e.target.value})} type='text' margin='normal' variant='outlined' color='secondary' />
     </div>   <div>
        <Button varient='contained' color='primary' onClick={prevStep}>Prev</Button>
     </div>
     
        <div>
        <Button varient='contained' color='primary' onClick={submitData}>Submit</Button>
     </div>
            </>
        )}
   </Form>
  )
}
