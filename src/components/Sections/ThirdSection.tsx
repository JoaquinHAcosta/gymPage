import { CarouselClasses } from '../Shared/CarouselClasses'
import { classes as carouselProps } from '@/data/gymData'

export const ThirdSection = () => {
  return (
    <section
      id="classes"
      className="h-[80vh] md:h-[120vh] w-full  bg-[rgb(3,12,20)] md:bg-[linear-gradient(0deg,_rgba(3,12,20,1)_88%,_rgba(255,255,255,1)_88%)]"
    >
      <div className="max-w-[1350px] mx-auto">
        <div className="hidden md:block h-[300px] w-[80%] mx-auto text-white">
          Aca video
        </div>
        <div className="text-white w-full flex flex-col items-center">
          <h2 className="px-4 py-6 text-5xl font-bold text-center">
            Fitness Classes For Every Goal
          </h2>
          <CarouselClasses props={carouselProps}></CarouselClasses>
        </div>
      </div>
    </section>
  )
}
