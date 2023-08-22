"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import PrimaryButton from '../../../components/PrimaryButton';
import LogoDiv from '@/components/LogoDiv';

const loginComponent = () => {

    const [isFilled, setIsFilled] = useState(false)
    const [formEmail, setFormEmail] = useState('')
    const [formPassword, setFormPassword] = useState('')
    const inputStyle = 'w-full outline-none bg-transparent border-lightBlue border-[1px] py-2 my-2 rounded-[10px] px-2 focus:bg-transparent'

   useEffect(() => {
       formEmail.length > 0 && formPassword.length > 0 ? setIsFilled(true) : setIsFilled(false);
   }, [formEmail, formPassword])
   

    return (
        <form className='flex flex-col w-[450px] items-center text-center md:rounded-[30px] my-20 py-10 px-5 md:px-10 bg-primary-blue'>
      <LogoDiv />

          <div className='py-5'>
              <h1 className='font-semibold text-xl text-white'>LOGIN</h1>
              <p className='font-extralight text-xs text-white'>Welcome, login to access your account and games.</p>
          </div>

            <input onChange={(e) => {
                setFormEmail(e.target.value);
            }} className={inputStyle} placeholder='Email' type="email" name="email" />
            <input onChange={(e) => {
                setFormPassword(e.target.value)
          }} className={inputStyle} placeholder='Password' type="password" name="password" />

          <Link href="/forgotPassword" className='py-2 w-full text-right text-sm text-white'>Forgot password?</Link>

            <PrimaryButton title="Login" active={isFilled ? "true" : "false"} />

        <small className='font-extralight text-white'>Don't have an account?<Link className=' ml-2 text-white' href="/createAccount">Create account</Link></small>
          
    </form>
  )
}

export default loginComponent