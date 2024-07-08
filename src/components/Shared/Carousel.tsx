import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

type carouselProps = {
  name: string
  description: string
}

export function CarouselMain({ props }: { props: carouselProps[] }) {
  return (
    <Carousel className="w-[900px] bottom-8">
      <CarouselContent>
        {props!.map((data, index) => (
          <CarouselItem className="basis-1/3" key={index}>
            <div className="p-1">
              <Card className="h-[460px]">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{data.name}</span>
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
