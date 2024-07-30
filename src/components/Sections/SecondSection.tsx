import Image from 'next/image'
import { Button } from '../ui/button'
import { Titles } from '../Shared/Titles'
import GymGuy2 from '../../../public/guy2.png'
import { classes } from '@/data/gymData'
import Link from 'next/link'

export const SecondSection = () => {
  return (
    <section className="h-screen w-full max-w-[1350px] flex items-center justify-center relative lg:px-10">
      <div className="hidden relative lg:block lg:w-[480px] h-[80%] -left-10">
        <div className="lg:h-[600] lg:w-[400px] xl:h-[640px] xl:w-[500px] absolute mx-auto">
          <Image
            alt="image"
            layout="fill"
            src={GymGuy2}
            className="rounded-bl-2xl [box-shadow:72px_-74px_0px_-58px_rgba(253,61,12,0.91)] "
          ></Image>
        </div>
      </div>

      <div className="w-full md:w-[80%] lg:w-1/2 px-4">
        <Titles sub={'About Us'} main={'Welcome To Our Fitness Gym'} />
        <p className="my-6  px-4 text-sm lg:py-6 lg:text-xl">
          {classes[1].description}
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
              <b>{classes[1].coach}</b> <br />
              Our couch
            </p>
          </div>
          <Button
            className="mt-10 md:mt-0"
            variant={'style2'}
            size={'mainsize'}
            asChild
          >
            <Link href={'#classes'}>Explore More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
