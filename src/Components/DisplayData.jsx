import React, { useContext } from 'react'
import { TableContainer,TableHead,TableBody,TableCell,TableRow,Table } from '@mui/material'
import { multiStepContext } from '../StepContext'

export default function DisplayData() {
    const {finalData}=useContext(multiStepContext);
    // localStorage.setItem('finalData', JSON.stringify(finalData))
  return (
    <div>
      <TableContainer style={{display:'flex', justifyContent:'center'}}>
        <Table border="1" style={{width:'90%',justifyContent:'center'}}>
            <TableHead>
                <TableRow style={{backgroundColor:'rgb(10, 69, 117)',color:'aliceblue'}}>
                    {/* <TableCell style={{height:'100px',width:'100px'}} >Profile Picture</TableCell> */}
                    <TableCell>First Name</TableCell>
                    <TableCell>Midle Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>DOB</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>PostalCode</TableCell>
                    <TableCell>State</TableCell>
                    <TableCell>Country</TableCell>
                    <TableCell>Qualification</TableCell>
                    <TableCell>Stream</TableCell>
                    <TableCell>Institute</TableCell>
                    <TableCell>Collage-Start</TableCell>
                    <TableCell>Collage-End</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {finalData.map(data=>(
                    <TableRow key={data.email} style={{backgroundColor:'white', color: 'black'}} >
                        {/* <TableCell style={{height:'100px',width:'100px'}}>{data.profile}</TableCell> */}
                        <TableCell>{data.firstname}</TableCell>
                        <TableCell>{data.midlename}</TableCell>
                        <TableCell>{data.lastname}</TableCell>
                        <TableCell>{data.date}</TableCell>
                        <TableCell>{data.address}</TableCell>
                        <TableCell>{data.postalcode}</TableCell>
                        <TableCell>{data.state}</TableCell>
                        <TableCell>{data.country}</TableCell>
                        <TableCell>{data.yourQualification}</TableCell>
                        <TableCell>{data.yourStream}</TableCell>
                        <TableCell>{data.instituteName}</TableCell>
                        <TableCell>{data.start}</TableCell>
                        <TableCell>{data.end}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

