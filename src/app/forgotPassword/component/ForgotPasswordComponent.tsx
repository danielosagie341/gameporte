"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
// import NavBrand from '@/assets/NavBrand.png';
// import forgotPassword from '@/assets/forgotPassword.png';
import Link from 'next/link';
import PrimaryButton from '../../../components/PrimaryButton';
import LogoDiv from '@/components/LogoDiv';


const ForgotPasswordComponent = () => {

    const [isFilled, setIsFilled] = useState(false)
    const [formEmail, setFormEmail] = useState('')
    const inputStyle = 'w-full outline-none bg-transparent border-lightBlue border-[1px] py-2 my-2 rounded-[10px] px-2 focus:bg-transparent'

    useEffect(() => {
        formEmail.length > 0  ? setIsFilled(true) : setIsFilled(false);
    }, [formEmail])


  return (
      <form className='flex flex-col w-[450px] items-center text-center md:rounded-[30px] my-20 py-10 px-5 md:px-10 bg-primaryBlue'>
  <LogoDiv />

          {/* <Image className="pt-5" src={forgotPassword} alt="" /> */}

          <div className='py-5'>
              <h1 className='font-semibold text-xl'>Forgot Password</h1>
              <p className='font-extralight text-xs'>Enter your email to reset your account password.</p>
          </div>

          <input onChange={(e) => {
              setFormEmail(e.target.value);
          }} className={inputStyle} placeholder='Email' type="email" name="email" />

          <PrimaryButton title="Submit" active={isFilled ? "true" : "false"} />

          <small className='font-extralight'>Back to<Link className=' ml-2 text-lightBlue' href="/login">Login</Link></small>

      </form>
  )
}

export default ForgotPasswordComponent