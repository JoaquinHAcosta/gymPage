import React from 'react'
import { CarouselMain } from '../Shared/Carousel'

const carouselProps = [
  {
    name: 'Power Yoga Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    name: 'Weight Lifting Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    name: 'Cardio & Streght Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    name: 'Power Yoga Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    name: 'Weight Lifting Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    name: 'Cardio & Streght Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    name: 'Power Yoga Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    name: 'Weight Lifting Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    name: 'Cardio & Streght Classes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
]

export const ThirdSection = () => {
  return (
    <section className="h-[120vh] w-full bg-[rgb(3,12,20)] bg-[linear-gradient(0deg,_rgba(3,12,20,1)_88%,_rgba(255,255,255,1)_88%)]">
      <div className="h-[500px] w-[860px] mx-auto border-8 border-red-600 text-white">
        Aca video
      </div>
      <div className="text-white w-full flex flex-col items-center">
        <h2 className=" p-4 pb-10 text-4xl font-bold">
          Fitness Classes For Every Goal
        </h2>
        <div>
          <CarouselMain props={carouselProps}></CarouselMain>
        </div>
      </div>
    </section>
  )
}
