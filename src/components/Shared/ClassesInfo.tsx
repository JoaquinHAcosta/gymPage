import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type Props = {
  idClase: number
  title: string
  description: string
  horario: string
}

export const ClassesInfo = ({ clasesDia }: { clasesDia: Props[] }) => {
  return (
    <Accordion type="single" collapsible>
      {clasesDia.map((clase) => {
        return (
          <AccordionItem value={`item-${clase.idClase}`} key={clase.idClase}>
            <AccordionTrigger className="h-20">{clase.title}</AccordionTrigger>
            <AccordionContent>{clase.description}</AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
