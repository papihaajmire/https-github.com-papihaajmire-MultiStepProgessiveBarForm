import React, { useContext } from 'react'
import { Button, TextField } from '@mui/material';
import { multiStepContext } from '../StepContext';

export default function SecondStep() {
    const{setStep, userData, setUserData} = useContext(multiStepContext);
  return (
    <div>
        
           <div className="Personal">
           <h3>Address Details</h3>
           <div>
                <TextField label="Address" value={userData['address']} onChange={(e)=>setUserData({...userData,"address": e.target.value})} margin="normal" varient="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="Postal code" value={userData['postalcode']} onChange={(e)=>setUserData({...userData,"postalcode": e.target.value})} margin="normal" varient="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="State" value={userData['state']} onChange={(e)=>setUserData({...userData,"state": e.target.value})} margin="normal" varient="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="Country" value={userData['country']} onChange={(e)=>setUserData({...userData,"country": e.target.value})} margin="normal" varient="outlined" color="secondary" />
            </div>
            <div>
            <Button varient="contained" onClick={()=>setStep(1)} color="secondary">Previous</Button>
            <Button varient="contained" onClick={()=>setStep(3)} color="primary">Next</Button>
            </div>
           </div>
    </div>
  )
}
