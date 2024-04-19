import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { multiStepContext } from '../StepContext';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

// Styling for PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

export default function PreviewData() {
  const { userData, setStep, submitData } = useContext(multiStepContext);

  // Generate the PDF document
  const PDFDocument = (
    <Document>
      <Page size="A5" style={styles.page}>
        <View style={styles.section}>
          <Text>Personal Details</Text>
          <Image src={userData.profile} style={styles.image} />
          <Text>First Name: {userData.firstname}</Text>
          <Text>Middle Name: {userData.middlename}</Text>
          <Text>Last Name: {userData.lastname}</Text>
          <Text>Mobile: {userData.mobile}</Text>
          <Text>Email: {userData.email}</Text>
        </View>
        <View style={styles.section}>
          <Text>Address Details</Text>
          <Text>Address: {userData.address}</Text>
          <Text>Postal Code: {userData.postalcode}</Text>
          <Text>State: {userData.state}</Text>
          <Text>Country: {userData.country}</Text>
        </View>
        <View style={styles.section}>
          <Text>Education Details</Text>
          <Text>Qualification: {userData.yourQualification}</Text>
          <Text>Stream: {userData.yourStream}</Text>
          <Text>Institute Name: {userData.instituteName}</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div>
      <h2>Preview Data</h2>
      {/* Display the profile image */}
      {/* <img src={userData.profile} alt="Profile" style={styles.image} /> */}
      <div className="preview">
        <div className='data'>
          <h3 className='text-center'>Personal Details</h3>
          {/* Check if userData.profile is correctly set */}
          {userData.profile && <img src={userData.profile} alt="Profile" />}
          {/* Display the image if userData.profile is not empty */}
          <p><strong>First Name:</strong> {userData.firstname}</p>
          <p><strong>Middle Name:</strong> {userData.middlename}</p>
          <p><strong>Last Name:</strong> {userData.lastname}</p>
          <p><strong>Date Of Birth:</strong> {userData.date}</p>
          <p><strong>Mobile:</strong> {userData.mobile}</p>
          <p><strong>Email:</strong> {userData.email}</p>
        </div>
        <div className='data'>
          <h3 className='text-center'>Address Details</h3>
          <p><strong>Address:</strong> {userData.address}</p>
          <p><strong>Postal Code:</strong> {userData.postalcode}</p>
          <p><strong>State:</strong> {userData.state}</p>
          <p><strong>Country:</strong> {userData.country}</p>
        </div>
        <div className='data'>
          <h3 className='text-center'>Education Details</h3>
          <p><strong>Qualification:</strong> {userData.yourQualification}</p>
          <p><strong>Stream:</strong> {userData.yourStream}</p>
          <p><strong>Institute Name:</strong> {userData.instituteName}</p>
          <p><strong>Collage-Start:</strong> {userData.start}</p>
          <p><strong>Collage-End:</strong> {userData.end}</p>
        </div>
      </div>
      <br />
      {/* Download button for the PDF */}
      <PDFDownloadLink document={PDFDocument} fileName="UserData.pdf">
        {({ loading }) =>
          loading ? 'Loading document...' : 'Download PDF'
        }
      </PDFDownloadLink>
      <br />
      {/* Submit button */}
      <Button variant="contained" onClick={() => setStep(3)} color="secondary">Edit</Button>
      <Button variant="contained" onClick={submitData} color="primary">Submit</Button>
    </div>
  );
}

