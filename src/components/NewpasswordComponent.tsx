"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import NavBrand from '@/assets/NavBrand.png';
import Link from 'next/link';
import PrimaryButton from './PrimaryButton';

const NewpasswordComponent = () => {

    const [isFilled, setIsFilled] = useState(false)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const inputStyle = 'w-full outline-none bg-transparent border-lightBlue border-[1px] py-2 my-2 rounded-[10px] px-2 focus:bg-transparent'

    useEffect(() => {
        password.length > 0 && confirmPassword.length > 0 ? setIsFilled(true) : setIsFilled(false);
    }, [password, confirmPassword])

  return (
      <form className='flex flex-col w-[450px] items-center text-center md:rounded-[30px] my-20 py-10 px-5 md:px-10 bg-primaryBlue'>
          <Image className="px-10" src={NavBrand} alt="" />

          <div className='py-5'>
              <h1 className='font-semibold text-xl'>New password</h1>
              <p className='font-extralight text-xs'>Enter new password to change your account password.</p>
          </div>

          <input onChange={(e) => {
              setPassword(e.target.value);
          }} className={inputStyle} placeholder='Password' type="password" name="password" />
          <input onChange={(e) => {
              setConfirmPassword(e.target.value)
          }} className={inputStyle} placeholder='Confirm Password' type="password" name="confirm password" />

          <PrimaryButton title="Reset password" active={isFilled ? "true" : "false"} />

          <small className='font-extralight'>Back to<Link className=' ml-2 text-lightBlue' href="/login">Login</Link></small>

      </form>
  )
}

export default NewpasswordComponent