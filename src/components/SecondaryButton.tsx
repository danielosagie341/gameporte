import React from 'react'

interface SecondaryButtonProps {
    title: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = (props) => {
  return (
      <p className='md:border-2 md:inline px-7 text-center py-3 my-2 rounded-[50px] border-lightBlue mx-2'>{ props.title }</p>
  )
}

export default SecondaryButton