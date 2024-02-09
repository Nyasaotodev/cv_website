import { Charte } from '@/components/charte'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Organisations } from '@/components/organisations'
import { Testimonials } from '@/components/demarche'
import { Empreinte } from '@/components/empreinte'
import { Map } from '@/components/map'
import { Header } from '@/components/Header'
import { Comparatif } from '@/components/comparatif'
import { Button} from "@/components/Button";

export default function Home() {
  return (
    <>
    <Header />
      <main>
        <Button href="/" className="bottom-10 right-10 z-10 fixed">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50"
               className={"fill-white"}>
            <path
                d="M 25 7.21875 L 23.59375 8.65625 L 13.6875 18.53125 C 12.902344 19.316406 12.902344 20.589844 13.6875 21.375 C 14.472656 22.160156 15.746094 22.160156 16.53125 21.375 L 23 14.875 L 23 40 C 22.988281 40.722656 23.367188 41.390625 23.992188 41.753906 C 24.613281 42.121094 25.386719 42.121094 26.007813 41.753906 C 26.632813 41.390625 27.011719 40.722656 27 40 L 27 14.875 L 33.46875 21.375 C 34.253906 22.160156 35.527344 22.160156 36.3125 21.375 C 37.097656 20.589844 37.097656 19.316406 36.3125 18.53125 L 26.40625 8.65625 Z"></path>
          </svg>
          Go back
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50"
               className={"fill-white"}>
            <path
                d="M 25 7.21875 L 23.59375 8.65625 L 13.6875 18.53125 C 12.902344 19.316406 12.902344 20.589844 13.6875 21.375 C 14.472656 22.160156 15.746094 22.160156 16.53125 21.375 L 23 14.875 L 23 40 C 22.988281 40.722656 23.367188 41.390625 23.992188 41.753906 C 24.613281 42.121094 25.386719 42.121094 26.007813 41.753906 C 26.632813 41.390625 27.011719 40.722656 27 40 L 27 14.875 L 33.46875 21.375 C 34.253906 22.160156 35.527344 22.160156 36.3125 21.375 C 37.097656 20.589844 37.097656 19.316406 36.3125 18.53125 L 26.40625 8.65625 Z"></path>
          </svg>
        </Button>
        <Hero/>
        <Organisations/>
        <Empreinte/>
        <Charte/>
        <Map/>
        <Testimonials/>
        <Comparatif/>
      </main>
      <Footer/>
    </>
  )
}
