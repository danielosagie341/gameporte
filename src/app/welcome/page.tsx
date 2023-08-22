"use client"
import React, { useEffect, useState } from 'react';
import GameProfileUpdated from '@/components/GameProfileUpdated';
import PreferredConsoleTag from '@/components/PreferredConsoleTag';
import SelectConsole from '@/app/welcome/component/SelectConsole';
import Home from '../page';
import Welcome from './component/Welcome';
import SelectGame from './component/SelectGame';



interface pageProps {
  pageNumber: number;
}

const Page: React.FC<pageProps> = (props) => {
  let pageNumber = props.pageNumber;
  const [currentPage, setCurrentPage] = useState(pageNumber);

  const handleContinueClick1 = () => {
    setCurrentPage(2)
  };

  const handleContinueClick2 = () => {
    setCurrentPage(3)
  };

  const handleContinueClick3 = () => {
    setCurrentPage(4)
  };

  const handleContinueClick4 = () => {
    setCurrentPage(5)
  };

  const handleContinueClick5 = () => {
    setCurrentPage(6)
  };


  let componentToRender;

  switch (currentPage) {
    case 1:
      componentToRender = <Welcome onContinueClick1={handleContinueClick1} />;
      break;
    case 2:
      componentToRender = <SelectConsole onContinueClick2={handleContinueClick2} />;
      break;
    case 3:
      componentToRender = <SelectGame onContinueClick3={handleContinueClick3} onContinueClick1={handleContinueClick1} />;
      break;
    case 4:
      componentToRender = <PreferredConsoleTag onContinueClick4={handleContinueClick4} onContinueClick2={handleContinueClick2} />
      break;
    case 5:
      componentToRender = <GameProfileUpdated onContinueClick5={handleContinueClick5} />;
      break;
    case 6:
      componentToRender = <Home />;
      break;
    default:
      componentToRender = <Welcome onContinueClick1={handleContinueClick1} />;
  }

  return (
    <div className='bg-primaryImage bg-darkBlue flex justify-center items-center'>
      {componentToRender}
    </div>
  );
};

export default Page;
