import React from 'react'
import { CarouselClasses } from '../Shared/CarouselClasses'
import { carouselProps } from '@/data/gymData'

export const ThirdSection = () => {
  return (
    <section className="h-[120vh] w-full bg-[rgb(3,12,20)] bg-[linear-gradient(0deg,_rgba(3,12,20,1)_88%,_rgba(255,255,255,1)_88%)]">
      <div className="md:h-[500px] w-[80%] mx-auto border-8 border-red-600 text-white">
        Aca video
      </div>
      <div className="text-white w-full flex flex-col items-center">
        <h2 className="pt-24 px-4 pb-12 text-5xl font-bold text-center">
          Fitness Classes For Every Goal
        </h2>
        <CarouselClasses props={carouselProps}></CarouselClasses>
      </div>
    </section>
  )
}
