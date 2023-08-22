"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
// import NavBrand from '@/assets/NavBrand.png';
// import successTick from '@/assets/successTick.png';
import Link from 'next/link';
import PrimaryButton from '@/components/PrimaryButton';


interface SuccessComponentProps {
    description: string;
}


const SuccessComponent: React.FC<SuccessComponentProps> = (props) => {
  return (
      <form className='flex flex-col w-[450px] items-center text-center md:rounded-[30px] my-20 py-10 px-5 md:px-10 bg-primaryBlue'>
          {/* <Image className="px-10" src={NavBrand} alt="" /> */}

          {/* <Image className="pt-5" src={successTick} alt="" /> */}

          <div className='py-5'>
              <h1 className='font-semibold py-2 text-xl'>Success!</h1>
              <p className='font-extralight text-sm'>{ props.description }</p>
          </div>

          <PrimaryButton title="Done" active="true" />

      </form>
  )
}

export default SuccessComponent