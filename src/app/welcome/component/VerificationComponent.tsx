"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
// import NavBrand from '@/assets/NavBrand.png';
// import verificationImage from '@/assets/verificationImage.png';
import Link from 'next/link';
import PrimaryButton from '@/components/PrimaryButton';


const VerificationComponent = () => {
    const[verificationCode, setVerificationCode] = useState(['', '', '', '']);
    const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(4).fill(null));
    const isFilled = verificationCode.every((digit) => digit !== '');


    const handleInput = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const newVerificationCode = [...verificationCode];
        newVerificationCode[index] = value;
        setVerificationCode(newVerificationCode);

        if (value !== '') {
            if (index < 3) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

  return (
      <form className='flex flex-col w-[450px] items-center text-center md:rounded-[30px] my-20 py-10 px-5 md:px-10 bg-primaryBlue'>
          {/* <Image className="px-10" src={NavBrand} alt="" /> */}

          {/* <Image className="pt-5" src={verificationImage} alt="" /> */}

          <div className='py-5'>
              <h1 className='font-semibold py-2 text-xl'>Verification Code</h1>
              <p className='font-extralight text-sm'>We have sent a verification code to Jake@gameporte.com</p>
          </div>

          <div className='flex w-full'>
              {verificationCode.map((digit, index) => (
                  <input
                      key={index}
                      type="number"
                      disabled={isFilled ? true : false}
                      value={digit}
                      className=' text-center outline-lightBlue bg-disableBlue border-lightBlue border-[1px] h-[80px] w-[80px] mx-2 my-2 rounded-full px-2'
                      maxLength={1}
                      onChange={(e) => {
                          handleInput(index, e)
                          console.log(verificationCode);
                      }}
                      ref={(input) => (inputRefs.current[index] = input)}
                  />
              ))}

          </div>

          <PrimaryButton title="Submit" active={isFilled ? "true" : "false"} />

          <small className='font-extralight'>Didn't recieve the code?<Link className=' ml-2 text-lightBlue' href="/">Resend</Link></small>

      </form>
  )
}

export default VerificationComponent