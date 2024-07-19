import * as React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { Progress } from '../ui/progress'

type carouselProps = {
  name: string
  description: string
  image: string
  full: number
}

export function CarouselClasses({ props }: { props: carouselProps[] }) {
  return (
    <Carousel className="w-80 lg:w-[1200px] md:bottom-8">
      <CarouselContent>
        {props!.map((data, index) => (
          <CarouselItem className="basis-1/1 md:basis-1/3" key={index}>
            <div className="p-1">
              <ClassesCard data={data} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

const ClassesCard = ({ data }: { data: any }) => {
  return (
    <Card className="h-[560px] w-[310px] ">
      <CardContent className="flex-col items-center justify-center px-0 overflow-hidden">
        <div className="absolute h-1/2 w-full py-2 ">
          <Image
            alt="dude"
            // width={400}
            // height={200}
            src={data.image}
            fill
            // className="w-[400px] h-[240px]"
          ></Image>
        </div>
        <CardHeader className="pt-[50%] w-[90%] mx-auto text-3xl font-semibold">
          {data.name}
        </CardHeader>
        <CardDescription className="px-4 w-[90%]  mx-auto">
          {data.description} <br />
          <label className="flex justify-between">
            <b>Class Full</b>
            <b>{data.full}%</b>
          </label>
        </CardDescription>
        <Progress className="bg-[#FD3D0C] w-[90%] mx-auto" value={data.full} />
      </CardContent>
    </Card>
  )
}
