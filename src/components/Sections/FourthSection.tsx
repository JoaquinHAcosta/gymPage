import React from 'react'
import { PickClasses } from '../Shared/PickClasses'
import { Titles } from '../Shared/Titles'
import GymPeople from '../../../public/gympeople.png'

export const FourthSection = () => {
  return (
    <section className="relative w-full h-screen">
      <div
        className={`bg-[${GymPeople}] h-screen w-full bg-no-repeat bg-center bg-cover blur-sm absolute`}
      ></div>
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
