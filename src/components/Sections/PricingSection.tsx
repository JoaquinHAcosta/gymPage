import React from 'react'
import { Button } from '../ui/button'
import { Titles } from '../Shared/Titles'

const prices = [
  {
    name: 'Free',
    price: '$0',
    benefits: [
      'Acceso Basico al Gimnasio',
      'Clases Grupales',
      'Vestidores y Duchas',
      'Asesoria Basica',
    ],
  },
  {
    name: 'Unlimited',
    price: '$5',
    benefits: [
      'Acceso Ilimitado al Gimnasio',
      'Clases Grupales',
      'Vestidores y Duchas',
      'Asesoria Personalizada',
      'Evaluacion Fisica',
      'Descuentos',
    ],
  },
  {
    name: 'Business',
    price: '$12',
    benefits: [
      'Todos los beneficios de Unlimited',
      'Entrenamiento Personal',
      'Acceso a Spa',
      'Horarios Exclusivos',
      'Evento VIP',
      'Membresia Familiar',
    ],
  },
]

export const PricingSection = () => {
  return (
    <section className="h-fit xl:h-[95vh] w-full flex flex-col items-center justify-center">
      <Titles main="Choose Your Pricing Plan" sub="Pricing Table"></Titles>
      <div className="flex justify-center items-stretch flex-wrap gap-3 my-7">
        {prices.map((p, i) => (
          <PriceCard pricing={p} key={i} />
        ))}
      </div>
    </section>
  )
}

type Props = {
  name: string
  price: string
  benefits: string[]
}

const PriceCard = ({ pricing }: { pricing: Props }) => {
  return (
    <div className="w-80 flex flex-col items-center justify-center border-2 p-6 rounded-lg mx-8 shadow-md transition hover:scale-105 lg:py-10">
      <h1 className="pb-5 text-5xl font-semibold">{pricing.name}</h1>
      <p className="text-wrap">
        Lorem ipsum dolor sit amet Lorem ipsum dolor sit, adipisicing elit.
      </p>
      <ul className="list-disc marker:text-blue-600 my-6">
        {pricing.benefits?.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <p className="text-4xl text-[#fd3d0c] font-bold">{pricing.price}</p>
      <Button
        variant={'style2'}
        className="w-full rounded-lg mt-6 hover:border-2 hover:border-[#fd3d0c]"
      >
        Choose Plan
      </Button>
    </div>
  )
}
