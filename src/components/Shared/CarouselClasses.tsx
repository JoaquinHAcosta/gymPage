import {
  Card,
  CardContent,
  CardDescription,
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
  _id: number
  classTitle: string
  description: string
  coach: string
  schedule: any
  difficultyLevel: string
  capacity: number
  image: any
}

export function CarouselClasses({ props }: { props: carouselProps[] }) {
  return (
    <Carousel className="w-80 md:w-[680px] lg:w-[820px] xl:w-[1100px] mx-auto">
      <CarouselContent>
        {props!.map((data, index) => (
          <CarouselItem
            className="basis-1/1 md:basis-1/2 xl:basis-1/3"
            key={index}
          >
            <div className="p-1">
              <ClassesCard data={data} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:block" />
      <CarouselNext className="hidden sm:block" />
    </Carousel>
  )
}

const ClassesCard = ({ data }: { data: carouselProps }) => {
  return (
    <Card className="h-[480px] w-[300px] lg:mx-10 shadow-md transition hover:scale-105">
      <CardContent className="flex flex-col justify-between px-0  h-full">
        <div className="h-[280px] w-[298px] py-2 relative rounded-t-md overflow-hidden">
          <Image alt={data.classTitle} src={data.image} fill></Image>
        </div>
        <CardHeader className="w-[90%] mx-auto text-2xl font-semibold py-3">
          {data.classTitle}
        </CardHeader>
        <CardDescription className="px-4 mx-auto max-h-36 text-clip">
          {data.description.substring(0, 150)}...{' '}
          <b className="underline">Leer mas</b> <br />
          <label className="flex justify-between font-semibold">
            <b>Class Full</b>
            <b>{data.capacity}%</b>
          </label>
        </CardDescription>
        <Progress
          className="bg-[#FD3D0C] w-[90%] mx-auto bottom-0"
          value={data.capacity}
        />
      </CardContent>
    </Card>
  )
}
