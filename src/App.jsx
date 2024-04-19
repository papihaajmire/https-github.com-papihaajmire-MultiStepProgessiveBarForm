import React, { useContext } from 'react'
import { multiStepContext } from './StepContext'
import FirstStep from './Components/FirstStep'
import SecondStep from './Components/SecondStep'
import ThirdStep from './Components/ThirdStep'
import PreviewData from './Components/Preview'
import DisplayData from './Components/DisplayData'
import { Step, StepLabel, Stepper } from '@mui/material'

const App = () => {
  const {currentStep, finalData} = useContext (multiStepContext)

  function showStep(step){
    switch(step){
      case 1:
        return <FirstStep/>
      case 2:
        return <SecondStep/>
      case 3:
        return <ThirdStep/>
      case 4:
        return <PreviewData/>
      case 5:
        return <DisplayData/>
    }
  }
  return (
    <>
      <div className="center-stepper">
        <Stepper style={{width:'400px'}} activeStep={currentStep-1} orientation='horizontal'>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </div>
      {showStep(currentStep)}
      <br />
      {finalData.length>0 ? <DisplayData/> :''}
    </>
  )
}

export default App
