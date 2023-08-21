import NewpasswordComponent from '@/components/NewpasswordComponent'
import SuccessComponent from '@/components/SuccessComponent'
import VerificationComponent from '@/components/VerificationComponent'
import React from 'react'

const page = () => {
  return (
    <div className='bg-primaryImage bg-darkBlue flex justify-center items-center'>
      <NewpasswordComponent />
      {/* <VerificationComponent /> */}
      {/* <SuccessComponent description='Your account has been created successfully.' /> */}
      </div>
  )
}

export default page