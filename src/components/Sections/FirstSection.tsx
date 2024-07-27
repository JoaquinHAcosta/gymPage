import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import GimGuyImage from '../../../public/gymguy3.png'

const isProd = process.env.NODE_ENV === 'production'

const FirstSection = () => {
  return (
    <section className="bg-[rgb(3,12,20)] bg-[linear-gradient(62deg,_rgba(3,12,20,1)_72%,_rgba(253,61,12,1)_72%)] h-screen w-full ">
      <div className="relative h-screen flex items-center justify-center bottom-0 max-w-[1350px] mx-auto">
        <div className=" text-white absolute z-10 w-[80%] xl:w-[800px]">
          <label className=" flex bold uppercase">
            <span className="bg-[rgb(253,61,12)] p-2">The Best</span>
            <span className="bg-[#847E7D] p-2">Fitness Club</span>
          </label>
          <h1 className="text-white text-4xl font-bold md:text-8xl">
            Work Hard To Get a Better Life
          </h1>
          <p className="py-6 md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
          <Button variant={'style2'} size={'mainsize'}>
            Get Started
          </Button>
        </div>
        <div className="w-[350px] h-[450px] md:w-[520px] md:h-[650px] absolute bottom-0 right-0">
          <Image layout="fill" alt="image" src={GimGuyImage}></Image>
        </div>
      </div>
    </section>
  )
}

export default FirstSection
