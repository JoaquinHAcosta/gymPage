import React from 'react'
import { PickClasses } from '../Shared/PickClasses'

export const FourthSection = () => {
  return (
    <section className="relative w-full h-screen">
      <div className="bg-[url('/gympeople.png')] h-screen w-full bg-no-repeat bg-cover blur-sm absolute"></div>
      <div className="h-screen w-full blur-none flex flex-col items-center justify-center text-white">
        <h2 className="font-bold text-[#FD3D0C] text-xl">TIME & TABLE</h2>
        <h1 className="text-5xl font-bold">Weekly Class Schedule</h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </p>
        <PickClasses />
      </div>
    </section>
  )
}
