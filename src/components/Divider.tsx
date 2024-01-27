import { Icon, type IconProps, useBreakpointValue } from '@chakra-ui/react'

type DividerProps = IconProps

function DesktopDivider(props: DividerProps): JSX.Element {
  return (
    <Icon
      viewBox="0 0 444 16"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
        <g transform="translate(212)" fill="#CEE3E9">
          <rect width="6" height="16" rx="3" />
          <rect x="14" width="6" height="16" rx="3" />
        </g>
      </g>
    </Icon>
  )
}

function MobileDivider(props: DividerProps): JSX.Element {
  return (
    <Icon
      viewBox="0 0 295 16"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
        <g transform="translate(138)" fill="#CEE3E9">
          <rect width="6" height="16" rx="3" />
          <rect x="14" width="6" height="16" rx="3" />
        </g>
      </g>
    </Icon>
  )
}

export function Divider(props: DividerProps): JSX.Element {
  const type = useBreakpointValue<'mobile' | 'desktop'>({
    base: 'mobile',
    md: 'desktop',
  })

  return type === 'mobile' ? (
    <MobileDivider {...props} />
  ) : (
    <DesktopDivider {...props} />
  )
}
