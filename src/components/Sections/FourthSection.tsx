import React from 'react'
import { PickClasses } from '../Shared/PickClasses'
import { Titles } from '../Shared/Titles'

export const FourthSection = () => {
  return (
    <section className="hidden md:block relative w-full h-screen">
      <div className="bg-[url('/gympeople.png')] h-screen w-full bg-no-repeat bg-center bg-cover blur-sm absolute"></div>
      <div className="h-screen w-full blur-none flex flex-col items-center justify-center text-white">
        <Titles sub="TIME & TABLE" main="Weekly Class Schedule" />
        <p className="text-xl m-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </p>
        <PickClasses />
      </div>
    </section>
  )
}
