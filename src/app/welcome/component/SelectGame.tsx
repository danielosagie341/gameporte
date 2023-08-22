"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import PrimaryButton from '@/components/PrimaryButton';
// import fifa from '@/assets/fifa.png';
// import pubgMobile from '@/assets/pubgMobile.png';
// import codm from '@/assets/codm.png';
// import freeFire from '@/assets/freeFire.png';


interface SelectGameProps {
    onContinueClick3: () => void;
    onContinueClick1: () => void;
}
const SelectGame: React.FC<SelectGameProps> = ({ onContinueClick3, onContinueClick1 }) => {

    const [isFilled, setIsFilled] = useState(false)
    const [fifaSelected, setFifaSelected] = useState(false)
    const [pubgMobileSelected, setPubgMobileSelected] = useState(false)
    const [codmSelected, setCodmSelected] = useState(false)
    const [freeFireSelected, setFreeFireSelected] = useState(false)

    useEffect(() => {
        fifaSelected ||
        pubgMobileSelected ||
        codmSelected ||
        freeFireSelected
            ? setIsFilled(true) : setIsFilled(false);
    }, [fifaSelected, pubgMobileSelected, codmSelected, freeFireSelected])
    
  return (
      <form className='flex flex-col items-center text-center my-20 py-10 px-5 md:px-10' >

          <div className='py-5'>
              <h1 className='font-semibold py-2 text-2xl'>Select games </h1>
              <p className='font-extralight text-sm'>Choose one or more option to continue</p>
          </div>

          <div className='md:flex'>
              <label >
                  <input type="checkbox" name='fifa' className='hidden' onChange={() => {
                      setFifaSelected(!fifaSelected);
                      console.log(fifaSelected);
                  }} />
                  {/* <Image className={`border-4 m-2 border-${fifaSelected ? "lightBlue" : 'transparent'} rounded-[30px]`} src={fifa} alt="" /> */}
              </label>


              <label >
                  <input type="checkbox" name='pubgcodm' className='hidden' onChange={() => {
                      setPubgMobileSelected(!pubgMobileSelected);
                      console.log(pubgMobileSelected);
                  }} />
                  {/* <Image className={`border-4 m-2 border-${pubgMobileSelected ? "lightBlue" : "transparent"} rounded-[30px]`} src={pubgMobile} alt="" /> */}
              </label>


              <label >
                  <input type="checkbox" name='codm' className='hidden' onChange={() => {
                      setCodmSelected(!codmSelected);
                      console.log(codmSelected);
                  }} />
                  {/* <Image className={`border-4 m-2 border-${codmSelected ? "lightBlue" : 'transparent'} rounded-[30px]`} src={codm} alt="" /> */}
              </label>

              <label >
                  <input type="checkbox" name='freeFire' className='hidden' onChange={() => {
                      setFreeFireSelected(!freeFireSelected);
                      console.log(freeFireSelected);
                  }} />
                  {/* <Image className={`border-4 m-2 border-${freeFireSelected ? "lightBlue" : 'transparent'} rounded-[30px]`} src={freeFire} alt="" /> */}
              </label>
          </div>

          <div className='md:w-[500px] w-[200px]'>
              <button className='w-full' onClick={onContinueClick3}><PrimaryButton title="next" active={isFilled ? "true" : "false"} /></button>
              <button className='w-full' onClick={onContinueClick1}><PrimaryButton title="previous" active="true" /></button>
         </div>

      </form>
  )
}

export default SelectGame