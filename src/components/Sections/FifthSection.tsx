import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const trainers = [
  {
    name: 'El pepe',
    instagram: 'userIg',
    phone: 'wspnumber',
  },
  {
    name: 'Ete Sech',
    instagram: 'userIg',
    phone: 'wspnumber',
  },
  {
    name: 'El pepe',
    instagram: 'userIg',
    phone: 'wspnumber',
  },
  {
    name: 'Ete Sech',
    instagram: 'userIg',
    phone: 'wspnumber',
  },
]

export const FifthSection = () => {
  return (
    <section className="bg-[#030c14] h-[60vh] w-full text-white flex flex-col items-center">
      <p className="font-bold text-[#fd3d0c]">Best Trainers</p>
      <h1 className="mx-auto text-4xl font-bold my-3">
        Our Professional Trainers
      </h1>
      <div className="w-[80%] mx-auto flex justify-around">
        {trainers.map((t, i) => (
          <TrainerCard trainer={t} key={i} />
        ))}
      </div>
    </section>
  )
}

type Trainer = {
  name: string
  instagram: string
  phone: string
}

const TrainerCard = ({ trainer }: { trainer: Trainer }) => {
  return (
    <div className="h-96 w-48 flex flex-col items-center justify-center text-white">
      <Image
        className="rounded-full"
        src="/guy2.png"
        alt="guy"
        width={240}
        height={200}
      ></Image>
      <h1 className="text-white text-2xl">{trainer.name}</h1>
      <p>Fitness Trainer</p>
      <div className="flex">
        <Button variant={'ghost'} className="rounded-full font-bold">
          X
        </Button>
        <Button variant={'ghost'} className="rounded-full font-bold">
          O
        </Button>
        <Button variant={'ghost'} className="rounded-full font-bold">
          T
        </Button>
      </div>
    </div>
  )
}
