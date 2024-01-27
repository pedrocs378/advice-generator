import { ThemeToggle } from '@/components/theme/theme-toggle'

type ContainerProps = {
  children?: React.ReactNode
}

export function Container({ children }: ContainerProps): JSX.Element {
  return (
    <div className="relative flex flex-col min-h-screen">
      <ThemeToggle />

      <main className="flex-1 flex flex-co items-center justify-center px-4">
        {children}
      </main>

      <footer className="h-8 flex items-center justify-center">
        <p className="text-xs">
          Desenvolvido com ❤️ por{' '}
          <a
            href="https://github.com/pedrocs378"
            rel="noreferrer noopener"
            target="_parent"
            className="text-muted-foreground font-semibold hover:underline"
          >
            Pedro César
          </a>
        </p>
      </footer>
    </div>
  )
}
