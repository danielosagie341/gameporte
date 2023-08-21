"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import NavBrand from '@/assets/NavBrand.png';
import Link from 'next/link';
import PrimaryButton from './PrimaryButton';

interface PreferredConsoleTagProps {
    onContinueClick4: () => void;
    onContinueClick2: () => void;
}

const PreferredConsoleTag: React.FC<PreferredConsoleTagProps> = ({ onContinueClick4, onContinueClick2 }) => {

    const [isFilled, setIsFilled] = useState(false)
    const [psID, setPsID] = useState('')
    const [CODMTag, setCODMTag] = useState('')
    const [PUBGMTag, setPUBGMTag] = useState('')
    const [freeFireTag, setFreeFireTag] = useState('')
    const inputStyle = 'w-full outline-none  bg-primaryBlue border-lightBlue border-[1px] py-3 my-3 rounded-[10px] px-2 '


    useEffect(() => {
        psID.length > 0 &&
            CODMTag.length > 0 ||
            PUBGMTag.length > 0 ||
            freeFireTag.length > 0 
            ? setIsFilled(true) : setIsFilled(false);
    }, [psID, CODMTag, PUBGMTag, freeFireTag])

  return (
      <form className='flex flex-col w-[550px] items-center text-center md:rounded-[30px] my-20 py-10 px-5 md:px-10'>

          <div className='py-5'>
              <h1 className='font-semibold text-xl'> What’s your preferred console Tag ID</h1>
              <p className='font-extralight text-xs'>Fill all selected in step 1</p>
          </div>

          <p className='text-left w-full text-disableGray font-semibold'>PSN</p>
          <input onChange={(e) => {
              setPsID(e.target.value);
          }} className={inputStyle} placeholder='Enter PS4 or PS5 ID' type="text" name="PSN" />

          <p className='text-left w-full text-disableGray font-semibold'>Gamer tag</p>
          <input onChange={(e) => {
              setCODMTag(e.target.value);
          }} className={inputStyle} placeholder='Enter Gamer Name In CODM' type="text" name="Gamer tag" />

          <p className='text-left w-full text-disableGray font-semibold'>Gamer tag</p>
          <input onChange={(e) => {
              setPUBGMTag(e.target.value);
          }} className={inputStyle} placeholder='Enter Gamer Name In PUBG Mobile' type="text" name="Gamer tag" />

          <p className='text-left w-full text-disableGray font-semibold'>Gamer tag</p>
          <input onChange={(e) => {
              setFreeFireTag(e.target.value)
          }} className={inputStyle} placeholder='Enter Gamer Name In Free Fire' type="text" name="Gamer tag" />

          
          <button className='w-full'  onClick={onContinueClick4}><PrimaryButton title="Next" active={isFilled ? "true" : "false"} /></button>
          <button className='w-full' onClick={onContinueClick2}><PrimaryButton title="Previous" active='true' /></button>

      </form>
  )
}

export default PreferredConsoleTag