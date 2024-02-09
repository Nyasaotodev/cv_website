import { Container } from '@/components/Container'
import map from "../images/map.png";
import Image from "next/image";
export function Map() {
  return (
    <Container
        id={"map"}
        className="flex flex-col justify-center pt-20 text-center lg:pt-32">
      <h3 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl sm:text-center">
        Carte mentale
    </h3>
      <Image
          className="h-120 w-auto justify-center items-center pt-5 pb-20"
          src={map}
          alt="thibaut fait ton travail"/>
    </Container>
  )
}
