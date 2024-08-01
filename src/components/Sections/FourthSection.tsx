import { PickClasses } from '../Shared/PickClasses'
import { Titles } from '../Shared/Titles'
import GymPeople from '../../../public/gympeople.png'
import Image from 'next/image'

export const FourthSection = () => {
  return (
    <section
      id="schedule"
      className="relative w-full h-screen flex justify-center bg-stone-500"
    >
      <Image
        alt="bg-gympeople"
        style={{
          minHeight: '100%',
          width: 'auto',
          position: 'absolute',
          objectFit: 'cover',
        }}
        src={GymPeople}
        className="blur-sm mx-auto xl:w-full xl:h-screen"
      ></Image>
      <div className="h-screen w-full blur-none flex flex-col items-center justify-center text-white absolute z-10">
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
