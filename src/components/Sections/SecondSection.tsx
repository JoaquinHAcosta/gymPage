import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Titles } from '../Shared/Titles'

export const SecondSection = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center relative">
      <div className="hidden md:flex w-[800px] absolute">
        <Image
          alt="image"
          layout="fill"
          src={'/guy2.png'}
          className="rounded-bl-2xl [box-shadow:72px_-74px_0px_-58px_rgba(253,61,12,0.91)] "
        ></Image>
      </div>
      <div className="w-[80%]">
        <Titles sub={'About Us'} main={'Welcome To Our Fitness Gym'} />
        <p className="my-6 text-xl md:py-6 md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
        <div className="flex flex-col justify-around">
          <div className="flex align-middle items-center gap-2">
            <div className="h-20 w-20 relative">
              <Image
                alt="image"
                layout="fill"
                src={'/guy2.png'}
                className="rounded-full"
              ></Image>
            </div>
            <p>
              {' '}
              <b>David Villa.</b> <br />
              Our couch
            </p>
          </div>
          <Button
            className="mt-10 md:mt-0"
            variant={'style2'}
            size={'mainsize'}
          >
            Explore More
          </Button>
        </div>
      </div>
    </section>
  )
}
