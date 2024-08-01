import { StaticImageData } from 'next/image'

export type typadoClasses = {
  _id: number
  classTitle: string
  description: string
  coach: string
  schedule: {
    day: string
    time: string
  }[]
  difficultyLevel: string
  capacity: number
  image: StaticImageData
}
