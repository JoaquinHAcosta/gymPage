import Image from 'next/image'
import { Button } from '../ui/button'
import { Titles } from '../Shared/Titles'
import GymGuy2 from '../../../public/guy2.png'

export const SecondSection = () => {
  return (
    <section className="h-screen w-full max-w-[1350px] flex items-center justify-center relative lg:px-10">
      <div className="hidden relative lg:block md:w-[500px] h-[80%] -left-10">
        <div className="lg:h-[600] lg:w-[400px] xl:h-[640px] xl:w-[500px] absolute mx-auto">
          <Image
            alt="image"
            layout="fill"
            src={GymGuy2}
            className="rounded-bl-2xl [box-shadow:72px_-74px_0px_-58px_rgba(253,61,12,0.91)] "
          ></Image>
        </div>
      </div>

      <div className=" md:w-[80%] lg:w-1/2 px-4">
        <Titles sub={'About Us'} main={'Welcome To Our Fitness Gym'} />
        <p className="my-6 text-xl md:py-6 md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
        <div className="flex flex-col justify-around md:flex-row">
          <div className="flex align-middle items-center gap-2">
            <div className="h-20 w-20 relative">
              <Image
                alt="image"
                layout="fill"
                src={GymGuy2}
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
