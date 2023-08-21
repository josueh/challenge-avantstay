import Image from 'next/image'
import imgSatellite from '~/assets/satellite.svg'

type Props = {
  region?: string
}

export const HomesNotFound = ({ region }: Props) => {
  return (
    <section>
      <Image src={imgSatellite} alt="Satellite" />
      <p>Oops! We haven&apos;t found anything matching your search.</p>
      <p>Try something else or reset the filters to see all {region} homes.</p>
      <br />
      <button>See all {region} homes</button>
    </section>
  )
}
