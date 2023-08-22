"use client"
import React, { useState } from 'react'

interface PrimaryButtonProps {
  title: string;
  active: string;
}


const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {

  let active = props.active;

  const activate = 'w-full bg-light-blue text-black';
  const disabled = 'bg-disableBlue text-disableGray';
  
  return (
    <button className={`w-full font-semibold py-3 rounded-[10px] my-4 ${active == "true" ? 'w-full bg-light-blue text-black' :  'text-gray bg-disabled-gray'}`} type="submit">{ props.title }</button>
  )
}

export default PrimaryButton