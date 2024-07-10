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

export function CarouselMain({ props }: { props: carouselProps[] }) {
  return (
    <Carousel className="w-[1200px] bottom-8">
      <CarouselContent>
        {props!.map((data, index) => (
          <CarouselItem className="basis-1/3" key={index}>
            <div className="p-1">
              <Card className="h-[460px] rounded-none p-0">
                <CardContent className="flex flex-col items-center justify-center px-0">
                  <Image
                    alt="dude"
                    width={1200}
                    height={400}
                    src={data.image}
                    className="w-[1200px] h-[240px]"
                  ></Image>
                  <CardHeader className="text-4xl font-semibold">
                    {data.name}
                  </CardHeader>
                  <CardDescription className="px-4">
                    {data.description} <br />
                    <label className="flex justify-between">
                      <b>Class Full</b>
                      <b>{data.full}%</b>
                    </label>
                  </CardDescription>
                  <Progress className="bg-[#FD3D0C]" value={data.full} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
