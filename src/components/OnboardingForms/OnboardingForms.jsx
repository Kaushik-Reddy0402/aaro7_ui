import React from 'react'
import FinancialSnapshotForm from './FinancialSnapshotForm'
import ClientDetailsForm from './ClientDetailsForm'
import { Button } from 'react-bootstrap'

const OnboardingForms = () => {

  const handleSubmit = () => {

  }


  return (
    <>
      <BusinessDashboard />
      <FinancialSnapshotForm />
      <ClientDetailsForm />
      <KycRegistration />
      <div className='mt-auto text-center'>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit Application
        </Button>
      </div>

    </>
  )
}

export default OnboardingForms
