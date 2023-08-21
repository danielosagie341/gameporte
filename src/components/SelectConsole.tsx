"use client"
import React, { useEffect, useState } from 'react'
import PrimaryButton from './PrimaryButton';
import Image from 'next/image';
import ps4 from '@/assets/ps4.png';
import ps5 from '@/assets/ps5.png';
import mobile from '@/assets/mobile.png';

interface SelectConsoleProps {
    onContinueClick2: () => void;
}

const SelectConsole: React.FC<SelectConsoleProps> = ({ onContinueClick2 }) => {

    const [isFilled, setIsFilled] = useState(false)
    const [ps4selected, setPs4selected] = useState(false)
    const [ps5selected, setPs5selected] = useState(false)
    const [mobileselected, setMobileselected] = useState(false)


    useEffect(() => {
        ps4selected ||
        ps5selected ||
        mobileselected 
            ? setIsFilled(true) : setIsFilled(false);
    }, [ps4selected, ps5selected, mobileselected])

  return (
      <form className='flex flex-col w-[500px] items-center text-center my-20 py-10 px-5 md:px-10' onSubmit={onContinueClick2} >

          <div className='py-5'>
              <h1 className='font-semibold py-2 text-2xl'>Select your preferred console(s) </h1>
              <p className='font-extralight text-sm'>Choose one or more option to continue</p>
          </div>

          <div className='md:flex'>
              <label >
                  <input type="checkbox" name='ps4' className='hidden' onChange={() => {
                      setPs4selected(!ps4selected);
                      console.log(ps4selected);
                  }} />
                  <Image className={`border-4 m-2 border-${ps4selected ? "lightBlue" : 'transparent'} rounded-[30px]`} src={ps4} alt="" />
              </label>


              <label >
                  <input type="checkbox" name='ps5' className='hidden' onChange={() => {
                      setPs5selected(!ps5selected);
                      console.log(ps5selected);
                  }} />
                  <Image className={`border-4 m-2 border-${ps5selected ? "lightBlue" : "transparent"} rounded-[30px]`} src={ps5} alt="" />
              </label>


              <label >
                  <input type="checkbox" name='mobile' className='hidden' onChange={() => {
                      setMobileselected(!mobileselected);
                      console.log(mobileselected);
                  }} />
                  <Image className={`border-4 m-2 border-${mobileselected ? "lightBlue" : 'transparent'} rounded-[30px]`} src={mobile} alt="" />
              </label>
         </div>
              
          <PrimaryButton title="continue" active={isFilled ? "true" : "false"} />

      </form>
  )
}

export default SelectConsole