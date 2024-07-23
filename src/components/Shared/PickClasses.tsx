import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ClassesInfo } from './ClassesInfo'

export const PickClasses = () => {
  return (
    <Tabs defaultValue="lunes" className="lg:w-[940px] min-h-[300px]">
      <TabsList className="grid w-full grid-cols-7 bg-transparent text-white">
        <TabsTrigger value="lunes">Lunes</TabsTrigger>
        <TabsTrigger value="martes">Martes</TabsTrigger>
        <TabsTrigger value="miercoles">Miercoles</TabsTrigger>
        <TabsTrigger value="jueves">Jueves</TabsTrigger>
        <TabsTrigger value="viernes">Viernes</TabsTrigger>
        <TabsTrigger value="sabado">Sabado</TabsTrigger>
        <TabsTrigger value="domingo">Domingo</TabsTrigger>
      </TabsList>
      <TabsContent value="lunes">
        <ClassesInfo />
      </TabsContent>
      <TabsContent value="martes">Clases del martes</TabsContent>
      <TabsContent value="miercoles">
        Clases del miercoles
        <ClassesInfo />
      </TabsContent>
      <TabsContent value="jueves">Clases del jueves</TabsContent>
      <TabsContent value="viernes">Clases del viernes</TabsContent>
      <TabsContent value="sabado">Clases del sabado</TabsContent>
      <TabsContent value="domingo">Clases del domingo</TabsContent>
    </Tabs>
  )
}

const HorarioClases = [
  {
    lunes: [
      { name: 'Yoga', horario: '16:30', description: 'Lorem ipsum' },
      { name: 'Musculatura', horario: '18:30', description: 'Lorem ipsum' },
    ],
  },
  {
    martes: [
      { name: 'Yoga', horario: '16:30', description: 'Lorem ipsum' },
      { name: 'Musculatura', horario: '18:30', description: 'Lorem ipsum' },
    ],
  },
  {
    miercoles: [
      { name: 'Yoga', horario: '16:30', description: 'Lorem ipsum' },
      { name: 'Musculatura', horario: '18:30', description: 'Lorem ipsum' },
    ],
  },
  {
    jueves: [
      { name: 'Yoga', horario: '16:30', description: 'Lorem ipsum' },
      { name: 'Musculatura', horario: '18:30', description: 'Lorem ipsum' },
    ],
  },
  {
    viernes: [
      { name: 'Yoga', horario: '16:30', description: 'Lorem ipsum' },
      { name: 'Musculatura', horario: '18:30', description: 'Lorem ipsum' },
    ],
  },
  {
    sabado: [
      { name: 'Yoga', horario: '16:30', description: 'Lorem ipsum' },
      { name: 'Musculatura', horario: '18:30', description: 'Lorem ipsum' },
    ],
  },
  {
    domingo: [
      { name: 'Yoga', horario: '16:30', description: 'Lorem ipsum' },
      { name: 'Musculatura', horario: '18:30', description: 'Lorem ipsum' },
    ],
  },
]
