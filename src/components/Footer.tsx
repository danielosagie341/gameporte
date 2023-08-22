"use client"
import DiscordIcon from "@/assets/icons/Discord";
import SecondaryButton from "./SecondaryButton"
import Image from 'next/image';
import TwitterIcon from "@/assets/icons/Twitter";
import TwitchIcon from "@/assets/icons/Twitch";
import InstagramIcon from "@/assets/icons/Instagram";
import FacebookIcon from "@/assets/icons/Facebook";
import YoutubeIcon from "@/assets/icons/Youtube";


const Footer = () => {
  return (
      <div>
          <div className=" bg-primary-blue md:h-[450px]  border-light-blue  w-full py-8 md:px-20 flex flex-col items-center justify-between border-b-2 border-lightBlue">
              <div className=" w-full mb-12 border-b border-light-blue  md:pb-0 px-2 min-h-[130px] flex flex-wrap justify-center items-center ">
                  <SecondaryButton title="Home" />
                  <SecondaryButton title="Porte Shop" />
                  <SecondaryButton title="About us" />
                  <SecondaryButton title="Contact us" />
                  <SecondaryButton title="FAQ" />
                  <SecondaryButton title="Privacy" />
                  <SecondaryButton title="Terms & Conditions" />
                  <SecondaryButton title="Sponsorship" />
              </div>

              <img className="px-5 mt-10 md:pt-0" src='./assets/NavBrand.png' alt="" />

              <div className="px-5 flex flex-wrap justify-center">
                  <DiscordIcon />
                  <TwitterIcon />
                  <TwitchIcon />
                  <InstagramIcon />
                  <FacebookIcon />
                  <YoutubeIcon />
              </div>

              <p className="text-xl text-center px-10">© Gameporte Interactive Inc.</p>
          </div>
          <div className="bg-bg-blue text-white  min-h-[130px] flex justify-center items-center text-center font-extralight text-sm px-10 py-10 md:py-0 md:px-36">
                <p>
                  Gameporte is not endorsed by, directly affiliated with, maintained or sponsored by Apple Inc, Electronic Arts, Activision Blizzard, Take-Two Interactive, Microsoft, Xbox, Sony, PlayStation or Epic Games. All content, games titles, trade names and/or trade dress, trademarks, artwork and associated imagery are trademarks and/or copyright material of their respective owners.
                </p>
          </div>
    </div>
  )
}

export default Footer