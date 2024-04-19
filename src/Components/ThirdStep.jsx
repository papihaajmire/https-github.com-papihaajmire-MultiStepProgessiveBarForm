import React, { useContext } from 'react'
import { Button, TextField } from '@mui/material';
import { multiStepContext } from '../StepContext';

export default function ThirdStep() {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    return (
        <div>

            <div className="Personal">
                <h3>Education Details</h3>
                <div>
                    <TextField label="Your Qualification" value={userData['yourQualification']} onChange={(e) => setUserData({ ...userData, "yourQualification": e.target.value })} margin="normal" varient="outlined" color="secondary" />
                </div>
                <div>
                    <TextField label="Your Stream" value={userData['yourStream']} onChange={(e) => setUserData({ ...userData, "yourStream": e.target.value })} margin="normal" varient="outlined" color="secondary" />
                </div>
                <div>
                    <TextField label="Institute Name" value={userData['instituteName']} onChange={(e) => setUserData({ ...userData, "instituteName": e.target.value })} margin="normal" varient="outlined" color="secondary" />
                </div>
                <div>
                <label htmlFor="">Collage-Start</label><br />
                <TextField type='date' value={userData['start']} onChange={(e) => setUserData({ ...userData, "start": e.target.value })} margin="normal" varient="outlined" color="secondary" />
                </div>
                <div>
                    <label htmlFor="">Collage-END</label><br />
                <TextField type='date' value={userData['end']} onChange={(e) => setUserData({ ...userData, "end": e.target.value })} margin="normal" varient="outlined" color="secondary" />
                </div>
                <div>
                    <Button varient="contained" onClick={() => setStep(2)} color="secondary">Previous</Button>
                    <Button varient="contained" onClick={() => setStep(4)} color="primary">Next</Button>
                </div>
            </div>
        </div>
    )
}
