import React from 'react'

interface SecondaryButtonProps {
    title: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = (props) => {
  return (
      <p className='md:border-2 md:inline px-5 text-center py-2 my-2 rounded-[50px] border-light-blue text-white mx-2'>{ props.title }</p>
  )
}

export default SecondaryButton