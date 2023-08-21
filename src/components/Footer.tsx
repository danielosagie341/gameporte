"use server"
import SecondaryButton from "./SecondaryButton"
import NavBrand from '@/assets/NavBrand.png';
import Discord from '@/assets/icons/Discord.svg';
import Twitter from '@/assets/icons/Twitter.svg';
import Twitch from '@/assets/icons/Twitch.svg';
import Instagram from '@/assets/icons/Instagram.svg';
import Facebook from '@/assets/icons/Facebook.svg';
import Youtube from '@/assets/icons/Youtube.svg';
import Image from 'next/image';


const Footer = () => {
  return (
      <div>
          <div className=" bg-primaryBlue md:h-[450px] w-full py-8 md:px-20 flex flex-col items-center justify-between border-b-2 border-lightBlue">
              <div className="border-b-[1px] w-full border-lightBlue pb-8 md:pb-0 px-8 min-h-[130px] flex flex-wrap justify-center items-center ">
                  <SecondaryButton title="Home" />
                  <SecondaryButton title="Porte Shop" />
                  <SecondaryButton title="About us" />
                  <SecondaryButton title="Contact us" />
                  <SecondaryButton title="FAQ" />
                  <SecondaryButton title="Privacy" />
                  <SecondaryButton title="Terms & Conditions" />
                  <SecondaryButton title="Sponsorship" />
              </div>

              <Image className="px-5 mt-10 md:pt-0" src={NavBrand} alt="" />

              <div className="px-5 flex flex-wrap justify-center">
                  <Image className="inline mx-3 my-3" src={Discord} alt="" />
                  <Image className="inline mx-3 my-3" src={Twitter} alt="" />
                  <Image className="inline mx-3 my-3" src={Twitch} alt="" />
                  <Image className="inline mx-3 my-3" src={Instagram} alt="" />
                  <Image className="inline mx-3 my-3" src={Facebook} alt="" />
                  <Image className="inline mx-3 my-3" src={Youtube} alt="" />
              </div>

              <p className="text-xl text-center px-10">© Gameporte Interactive Inc.</p>
          </div>
          <div className="bg-darkBlue min-h-[130px] flex justify-center items-center text-center font-extralight text-sm px-10 py-10 md:py-0 md:px-36">
                <p>
                  Gameporte is not endorsed by, directly affiliated with, maintained or sponsored by Apple Inc, Electronic Arts, Activision Blizzard, Take-Two Interactive, Microsoft, Xbox, Sony, PlayStation or Epic Games. All content, games titles, trade names and/or trade dress, trademarks, artwork and associated imagery are trademarks and/or copyright material of their respective owners.
                </p>
          </div>
    </div>
  )
}

export default Footer