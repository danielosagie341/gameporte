"use client"
import React from 'react'
import Image from 'next/image';
import profileUpdated from '@/assets/profileUpdated.png';
import PrimaryButton from './PrimaryButton';

interface PreferredConsoleTagProps {
    onContinueClick5: () => void;
}

const GameProfileUpdated: React.FC<PreferredConsoleTagProps> = ({ onContinueClick5 }) => {
  return (
      <form className='flex flex-col items-center text-center md:rounded-[30px] my-20 py-10 px-5 md:px-10' onSubmit={onContinueClick5}>
          <Image className="" src={profileUpdated} alt="" />

          <PrimaryButton title="Done" active="true" />

      </form>
  )
}

export default GameProfileUpdated