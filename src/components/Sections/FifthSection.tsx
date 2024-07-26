import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Titles } from '../Shared/Titles'

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
    <section className="bg-[#131313] h-fit w-full text-white flex flex-col items-center pt-4">
      <Titles sub="The Best Trainers" main="Our Professional Trainers" />
      <div className="w-full mx-auto flex flex-wrap justify-center my-5">
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
    <div className="h-fit md:h-96 w-[320px] flex flex-col items-center justify-center text-white">
      <div className="h-[150px] w-[150px] relative">
        <Image className="rounded-full" src="/guy2.png" alt="guy" fill></Image>
      </div>
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
