import React, { useEffect, useRef } from 'react'

type Props = {
  onVisible: () => void
  children?: React.ReactNode
}

export const VisibilityObserver = ({ onVisible, children }: Props) => {
  const refDiv = useRef<HTMLDivElement>(null)
  const refCallback = useRef(onVisible)

  useEffect(() => {
    const { current: divElement } = refDiv
    let observer = new IntersectionObserver((entries) => {
      const isIntersecting = entries.some((entry) => entry.isIntersecting)
      if (isIntersecting) {
        refCallback?.current()
      }
    })
    observer.observe(divElement!)
    return () => void observer.unobserve(divElement!)
  }, [])

  return <div ref={refDiv}>{children}</div>
}
