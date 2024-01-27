import { useQueryClient } from '@tanstack/react-query'
import { AlertCircle, Dice5, Save } from 'lucide-react'
import { toast } from 'sonner'

import { useSavedAdvices } from '@/hooks/use-saved-advices'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

import { useRandomAdvice } from '../hooks/use-random-advice'

export function Home() {
  const queryClient = useQueryClient()

  const { advice, isFetching, error } = useRandomAdvice()

  const { saveAdvice } = useSavedAdvices()

  const handleGenerateNewAdvice = () => {
    queryClient.invalidateQueries({ queryKey: ['random-advice'] })
  }
  const handleSaveCurrentAdvice = () => {
    if (!advice) {
      toast('Error', {
        description: 'Some error ocurred! Please refresh the page.',
      })
      return
    }

    saveAdvice({
      id: advice.slip.id,
      content: advice.slip.advice,
    })
  }

  return (
    <>
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Oops!</AlertTitle>
          <AlertDescription>Some error ocurred</AlertDescription>
        </Alert>
      )}

      <Card>
        <CardContent className="px-4 py-7 flex flex-col items-center gap-8 min-h-[340px]">
          {isFetching && (
            <>
              <Skeleton className="w-24 h-4" />
              <div className="flex flex-col items-center w-full gap-1">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-64" />
              </div>
            </>
          )}

          {!isFetching && (
            <>
              <span className="font-mono tracking-widest text-muted-foreground uppercase text-sm">
                Advice #{advice?.slip.id}
              </span>

              <strong className="text-2xl text-center">
                &quot;{advice?.slip.advice}&quot;
              </strong>
            </>
          )}

          <Separator />

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="success"
              className="rounded-full"
              disabled={isFetching}
              onClick={handleGenerateNewAdvice}
            >
              <Dice5 className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="success"
              className="rounded-full"
              disabled={isFetching}
              onClick={handleSaveCurrentAdvice}
            >
              <Save className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
