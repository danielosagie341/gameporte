"use client"
import React, { useEffect, useState } from 'react'
import PrimaryButton from './PrimaryButton';
import page from '@/app/welcome/page';


interface WelcomeProps {
    onContinueClick1: () => void; 
}

const Welcome: React.FC<WelcomeProps> = ({ onContinueClick1 }) => {
  return (
      <form className='flex flex-col w-[450px] items-center text-center my-20 py-10 px-5 md:px-10' onSubmit={ onContinueClick1 }>

          <div className='py-5'>
              <h1 className='font-semibold py-2 text-4xl'>Yay !!! Welcome to Gameporte, <small className='text-lightBlue'> JAKE !</small> </h1>
              <p className='font-extralight text-sm'>Let’s get you started on your play and earn journey.</p>
          </div>

          <PrimaryButton title="continue" active="true"/>

      </form>
  )
}

export default Welcome