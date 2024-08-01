import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ClassesInfo } from './ClassesInfo'
import { typadoClasses } from '@/types/types'

function filterClasses(arrayClasse: typadoClasses[], day: string) {
  let arrayOfClasses = []

  for (let i = 0; i < arrayClasse.length; i++) {
    let scheduleSingleClase = arrayClasse[i].schedule

    for (let j = 0; j < scheduleSingleClase.length; j++) {
      if (Object.values(scheduleSingleClase[j]).includes(day)) {
        let claseDia = {
          idClase: arrayClasse[i]._id,
          title: arrayClasse[i].classTitle,
          description: arrayClasse[i].description,
          horario: scheduleSingleClase[j].time,
        }
        arrayOfClasses.push(claseDia)
      }
    }
    scheduleSingleClase = []
  }

  return arrayOfClasses
}

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
        <ClassesInfo clasesDia={filterClasses(classes, 'Lunes')} />
      </TabsContent>
      <TabsContent value="martes">
        <ClassesInfo clasesDia={filterClasses(classes, 'Martes')} />
      </TabsContent>
      <TabsContent value="miercoles">
        <ClassesInfo clasesDia={filterClasses(classes, 'Miércoles')} />
      </TabsContent>
      <TabsContent value="jueves">
        <ClassesInfo clasesDia={filterClasses(classes, 'Jueves')} />
      </TabsContent>
      <TabsContent value="viernes">
        <ClassesInfo clasesDia={filterClasses(classes, 'Viernes')} />
      </TabsContent>
      <TabsContent value="sabado">
        <ClassesInfo clasesDia={filterClasses(classes, 'Sábado')} />
      </TabsContent>
      <TabsContent value="domingo">
        <ClassesInfo clasesDia={filterClasses(classes, 'Domingo')} />
      </TabsContent>
    </Tabs>
  )
}

import { classes } from '@/data/gymData'

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
