import { useCallback, useState } from 'react'
import { Trash2 } from 'lucide-react'

import { useSavedAdvices } from '@/hooks/use-saved-advices'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tooltip } from '@/components/ui/tooltip'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function MyAdvices(): JSX.Element {
  const [caraousel, setCarousel] = useState<CarouselApi>()

  const { advices, removeAdvice } = useSavedAdvices()

  const handleRemoveAdvice = useCallback(
    (adviceId: number, index: number) => {
      if (index === advices.length - 1) {
        caraousel?.scrollPrev()
      }

      removeAdvice(adviceId)
    },
    [caraousel, advices, removeAdvice],
  )

  if (advices.length === 0) {
    return (
      <Card className="relative">
        <CardContent className="flex items-center justify-center text-muted-foreground min-h-[340px]">
          <span className="text-center">No advices saved yet.</span>
        </CardContent>
      </Card>
    )
  }

  return (
    <Carousel className="w-full max-w-full" setApi={setCarousel}>
      <CarouselContent>
        {advices.map((savedAdvice, index) => {
          return (
            <CarouselItem key={savedAdvice.id}>
              <Card className="relative flex min-h-[340px]">
                <Tooltip label="Remove advice">
                  <Button
                    className="absolute top-4 right-4 h-8 w-8"
                    size="icon"
                    variant="destructive"
                    onClick={() => handleRemoveAdvice(savedAdvice.id, index)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </Tooltip>

                <CardContent className="px-7 flex flex-col items-center justify-center gap-8">
                  <span className="font-mono tracking-widest text-muted-foreground uppercase text-sm">
                    Advice #{savedAdvice.id}
                  </span>

                  <strong className="text-2xl text-center">
                    &quot;{savedAdvice.content}&quot;
                  </strong>
                </CardContent>
              </Card>
            </CarouselItem>
          )
        })}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
