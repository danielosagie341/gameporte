"use client"
import React, { useState } from 'react'

interface PrimaryButtonProps {
  title: string;
  active: string;
}


const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {

  let active = props.active;

  const activate = 'w-full bg-lightBlue text-black';
  const disabled = 'bg-disableBlue text-disableGray';
  
  return (
    <button className={`w-full font-semibold py-3 rounded-[10px] my-4 ${active == "true" ? activate : disabled}`} type="submit">{ props.title }</button>
  )
}

export default PrimaryButton