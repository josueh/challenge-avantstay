type Props = {
  test: boolean
  children: React.ReactNode
}

export const If = ({ test, children }: Props) => {
  return test ? children : null
}
