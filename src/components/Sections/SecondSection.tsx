import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

export const SecondSection = () => {
  return (
    <section className=" h-[80vh] w-full flex items-center justify-center">
      <div className="w-1/3">
        <Image
          alt="image"
          width={440}
          height={500}
          src={'/guy2.png'}
          className="rounded-bl-2xl [box-shadow:72px_-74px_0px_-58px_rgba(253,61,12,0.91)] "
        ></Image>
      </div>
      <div className="w-1/3 ">
        <label className="flex text-[rgb(253,61,12)] uppercase font-bold">
          About Us
        </label>
        <h1 className=" text-8xl">Welcome To Our Fitness Gym</h1>
        <p className="py-6 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
        <div className="flex justify-around">
          <div className="flex align-middle items-center gap-2">
            <Image
              alt="image"
              width={70}
              height={50}
              src={'/guy2.png'}
              className="rounded-full"
            ></Image>
            <p>
              {' '}
              <b>David Villa.</b> <br />
              Our couch
            </p>
          </div>
          <Button variant={'style2'} size={'mainsize'}>
            Explore More
          </Button>
        </div>
      </div>
    </section>
  )
}
