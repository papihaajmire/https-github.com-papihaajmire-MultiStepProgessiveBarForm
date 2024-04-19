import React, { useContext } from 'react'
import { Button, TextField } from '@mui/material';
import { multiStepContext } from '../StepContext';

export default function FirstStep() {
    const { setStep, userData, setUserData } = useContext(multiStepContext);

    // Function to handle profile image upload
    const handleProfileUpload = (e) => {
        const file = e.target.files[0]; // Get the first file from the selected files
        const reader = new FileReader(); // Create a FileReader object
        reader.readAsDataURL(file); // Read the file as a data URL

        // Callback function when the file is loaded
        reader.onload = () => {
            setUserData({ ...userData, "profile": reader.result }); // Set the profile data to the base64 encoded URL
        }
    };

    return (
        <div>
            
            <div className="Personal">
            <h2>Personal Details</h2>
                <div>
                    {/* Input field for profile image */}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleProfileUpload}
                        className='mt-3'
                    />
                </div>
                <div>
                    <TextField label="First name" value={userData['firstname']} onChange={(e) => setUserData({ ...userData, "firstname": e.target.value })} margin="normal" varient="outlined" color="primary" />
                </div>
                <div>
                    <TextField label="Midle name" value={userData['midlename']} onChange={(e) => setUserData({ ...userData, "midlename": e.target.value })} margin="normal" varient="outlined" color="secondary" />
                </div>
                <div>
                    <TextField label="Lirst name" value={userData['lastname']} onChange={(e) => setUserData({ ...userData, "lastname": e.target.value })} margin="normal" varient="outlined" color="secondary" />
                </div>
                <div>
                    <label htmlFor="">Date of Birth</label><br />
                    <TextField type='date' value={userData['date']} onChange={(e) => setUserData({ ...userData, "date": e.target.value })} margin="normal" varient="outlined" color="secondary" />
                </div>
                <div>
                    <TextField label="Mobile" value={userData['mobile']} onChange={(e) => setUserData({ ...userData, "mobile": e.target.value })} margin="normal" varient="outlined" color="secondary" />
                </div>
                <div>
                    <TextField label="Email" value={userData['email']} onChange={(e) => setUserData({ ...userData, "email": e.target.value })} margin="normal" varient="outlined" color="secondary" />
                </div>
                <div>
                    <Button variant="contained" onClick={() => setStep(2)} color="primary">Next</Button>
                </div>
            </div>
        </div>
    )
}



