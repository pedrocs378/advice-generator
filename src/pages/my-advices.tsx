import { useState } from 'react'
import { ChevronLeft, ChevronRight, Trash2 } from 'lucide-react'

import { useSavedAdvices } from '@/hooks/use-saved-advices'

import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Tooltip } from '@/components/ui/tooltip'

export function MyAdvices(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0)

  const { advices, removeAdvice } = useSavedAdvices()

  function handleChangeAdviceIndex(direction: 'back' | 'forward'): void {
    if (direction === 'back') {
      setCurrentIndex((index) => {
        if (index <= 0) return index

        return index - 1
      })
    } else {
      setCurrentIndex((index) => {
        if (index >= advices.length - 1) return index

        return index + 1
      })
    }
  }

  function handleRemoveAdvice(adviceId: number): void {
    removeAdvice(adviceId)

    if (currentIndex === advices.length - 1) {
      handleChangeAdviceIndex('back')
    }
  }

  return (
    <Card className="relative">
      {advices.length === 0 && (
        <CardContent className="flex items-center justify-center text-muted-foreground min-h-[340px]">
          <span className="text-center">No advices saved yet.</span>
        </CardContent>
      )}

      {advices.length > 0 && (
        <>
          <Tooltip label="Remove advice">
            <Button
              className="absolute top-4 right-4 h-8 w-8"
              size="icon"
              variant="destructive"
              onClick={() => handleRemoveAdvice(advices[currentIndex].id)}
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          </Tooltip>

          <CardContent className="px-7 py-7 flex flex-col items-center gap-8 min-h-[340px]">
            {currentIndex > 0 && (
              <Tooltip label="Previous advice">
                <Button
                  className="absolute top-1/2 right-full translate-x-1/2 -translate-y-1/2"
                  size="icon"
                  onClick={() => handleChangeAdviceIndex('back')}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </Tooltip>
            )}

            <span className="font-mono tracking-widest text-muted-foreground uppercase text-sm">
              Advice #{advices[currentIndex]?.id}
            </span>

            <strong className="text-2xl text-center">
              &quot;{advices[currentIndex]?.content}&quot;
            </strong>

            <Separator />

            {currentIndex < advices.length - 1 && (
              <Tooltip label="Next advice">
                <Button
                  className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2"
                  size="icon"
                  onClick={() => handleChangeAdviceIndex('forward')}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Tooltip>
            )}
          </CardContent>
        </>
      )}
    </Card>
  )
}
