"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import PrimaryButton from '../../../components/PrimaryButton';

const CreateAccountComponent = () => {

    const [isFilled, setIsFilled] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDob] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [inputType, setInputType] = useState('text');
    const inputStyle = 'w-full outline-none bg-transparent border-lightBlue border-[1px] py-2 my-2 rounded-[10px] px-2 focus:bg-transparent'

    const handleFocus = () => {
        setInputType('date');
    };

    useEffect(() => {
        username.length > 0 &&
        email.length > 0 &&
        dob.length > 0 &&
        password.length > 0 &&
        confirmPassword.length > 0 
        ? setIsFilled(true) : setIsFilled(false);
    }, [email, password])

  return (
      <form className='flex flex-col w-[450px] items-center text-center md:rounded-[30px] my-20 py-10 px-5 md:px-10 bg-primaryBlue'>
          <img className="px-10" src='./assets/NavBrand.png' alt="" />

          <div className='py-5'>
              <h1 className='font-semibold text-xl'>Create account</h1>
              <p className='font-extralight text-xs'>Get started to play competitions and get rewarded.</p>
          </div>

          <input onChange={(e) => {
              setUsername(e.target.value);
          }} className={inputStyle} placeholder='Username' type="username" name="username" />
          
          <input onChange={(e) => {
              setEmail(e.target.value);
          }} className={inputStyle} placeholder='Email' type="email" name="email"  required/>

          <input onChange={(e) => {
              setDob(e.target.value);
          }} className={inputStyle} placeholder='Date of Birth' onFocus={handleFocus} type={inputType} name="dob" />

          <input onChange={(e) => {
              setPassword(e.target.value);
          }} className={inputStyle} placeholder='password' type="password" name="password" />

          <input onChange={(e) => {
              setConfirmPassword(e.target.value)
          }} className={inputStyle} placeholder='Confirm Password' type="password" name="confirm password" />

          <small className='py-2 w-full text-xs font-extralight flex items-center text-lightBlue'>
              <input className='mr-2' type="checkbox" name="agree" />
              <small>I agree to the</small>
              <Link href="/" className='px-2 text-lightBlue'>Terms and Conditions</Link>
              <small>and</small>
              <Link href="/" className='px-2 text-lightBlue'>Privacy policy</Link>
          </small>

          <PrimaryButton title="Login" active={isFilled ? "true" : "false"} />

          <small className='font-extralight'>Already have an account?<Link className=' ml-2 text-lightBlue' href="/login">Login</Link></small>
      </form>
  )
}

export default CreateAccountComponent