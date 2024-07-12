import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ClassesInfo } from './ClassesInfo'

export const PickClasses = () => {
  return (
    <Tabs defaultValue="lunes" className="w-[1100px] min-h-[500px]">
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
