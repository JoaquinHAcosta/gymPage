import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const FirstSection = () => {
  return (
    <section className="bg-[rgb(3,12,20)] bg-[linear-gradient(62deg,_rgba(3,12,20,1)_72%,_rgba(253,61,12,1)_72%)] h-[80vh] w-full flex items-center justify-center">
      <div className="w-1/3 text-white">
        <label className=" flex bold uppercase">
          <span className="bg-[rgb(253,61,12)] p-2">The Best</span>
          <span className="bg-[#847E7D] p-2">Fitness Club</span>
        </label>
        <h1 className="text-white text-8xl">Work Hard To Get Better Life</h1>
        <p className="py-6 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
        <Button variant={'style2'} size={'mainsize'}>
          Get Started
        </Button>
      </div>
      <div className="w-1/3">
        <Image alt="image" width={1200} height={1200} src={'/guy1.png'}></Image>
      </div>
    </section>
  )
}

// background: linear-gradient(48deg, rgba(253,61,12,1) 81%, rgba(3,12,20,1) 82%);
export default FirstSection
