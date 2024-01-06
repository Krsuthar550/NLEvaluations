import React, { useContext } from 'react'
import {TableContainer,TableHead,TableCell,TableRow,Table} from '@material-ui/core';
import { multiStep } from '../StepCounter';
import { TableBody } from '@mui/material';

export default function ViewData() {
    const {finalData}=useContext(multiStep);
  return (
    <div>
<TableContainer style={{display:'flex',justifyContent:'center'}}>
 <Table border='1' style={{width:'60%',justifyContent:'center'}} size="small" aria-label="caption table" >
    <TableHead>
        <TableRow style={{backgroundColor:'burlywood', color:'aliceblue'}}>
            <TableCell>Name</TableCell>
            <TableCell>DOB</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Number</TableCell>
            <TableCell>Area</TableCell>
            <TableCell>City</TableCell>
            <TableCell>District</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Pincode</TableCell>
            <TableCell>Likes</TableCell>


        </TableRow>
    </TableHead>
    <TableBody>
            {finalData.map(data=>{
            return(
            <TableRow key={data.email}>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.date}</TableCell>
            <TableCell>{data.email}</TableCell>
            <TableCell>{data.number}</TableCell>
            <TableCell>{data.area}</TableCell>
            <TableCell>{data.city}</TableCell>
            <TableCell>{data.district}</TableCell>
            <TableCell>{data.state}</TableCell>
            <TableCell>{data.pincode}</TableCell>
            <TableCell>{data.likes}</TableCell>
            </TableRow>
            )
        })}
    </TableBody>

 </Table>
</TableContainer>
    </div>
  )
}
