'use client'
import { useState } from 'react'
import Image from 'next/image'
import * as UI from './photos.styles'

const IMG_WIDTH = 390
const IMG_HEIGHT = 209

function imageLoader({ src }: { src: string }) {
  const url = new URL(src)
  url.searchParams.append(`width`, IMG_WIDTH.toString())
  url.searchParams.append(`height`, IMG_HEIGHT.toString())
  url.searchParams.append(`webp`, `true`)
  url.searchParams.append(`quality`, `75`)
  return url.toString()
}

export const Photos = ({ title, urls }: { title?: string; urls: string[] }) => {
  const [downloads, setDownloads] = useState(0)
  const [loading, setLoading] = useState(true)
  const [imageSelected, setImageSelected] = useState(0)

  const imageUrl = urls?.[imageSelected] ?? ''

  function shiftImage(direction: number) {
    let index = (imageSelected + direction) % urls.length
    if (index < 0) index = urls.length - 1
    setImageSelected(index)
    setLoading(true)
  }

  function handleLoadingComplete() {
    setDownloads((prev) => prev + 1)
    setLoading(false)
  }

  return (
    <UI.Wrapper
      style={{ width: IMG_WIDTH, height: IMG_HEIGHT }}
      className={loading ? 'loading' : undefined}
    >
      {imageUrl ? (
        <Image
          key={imageUrl}
          loader={imageLoader}
          className="skeleton"
          src={imageUrl}
          alt={title ?? ''}
          width={IMG_WIDTH}
          height={IMG_HEIGHT}
          onLoadingComplete={handleLoadingComplete}
        />
      ) : null}
      {urls.length > 1 && downloads ? (
        <UI.Nav>
          <UI.NavButton className="left" onClick={() => shiftImage(-1)} />
          <UI.NavButton className="right" onClick={() => shiftImage(1)} />
        </UI.Nav>
      ) : null}
      {urls.length > 1 ? (
        <UI.Total>
          Photo {imageSelected + 1} of {urls.length}
        </UI.Total>
      ) : null}
    </UI.Wrapper>
  )
}
