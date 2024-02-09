import { Container } from '@/components/Container'
import Image from "next/image";
import logoNya from "../images/avatars/Nyasaoto.png";
import logoHydler from "../images/avatars/Hydler.png";
import logoUnderscored_Thibaut from "../images/avatars/Underscored_Thibaut.png";
export function Hero() {
  return (
    <Container className="pb-16 pt-10 text-center lg:pt-10">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl sm:text-center">
        SAE 106
      </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
            <div className={"flex justify-center align-middle space-x-20 p-10"}>
                <div className={"flex flex-raw p-2 align-middle"}>
                    <Image
                        className="max-w-none w-12 h-12 rounded-full"
                        src={logoNya}
                        alt="logo Nyasaoto"/>
                    <p className={"p-2 w-48"}>ALLOSTRY Lohann</p>
                </div>
                <div className={"flex flex-raw p-2 align-middle"}>
                    <Image
                        className="max-w-none w-12 h-12 rounded-full"
                        src={logoHydler}
                        alt="logo Hydler"/>
                    <p className={"p-2 w-40"}>MARISSAL Ethan</p>
                </div>
                <div className={"flex flex-raw p-2 align-middle"}>
                    <Image
                        className="max-w-none w-12 h-12 rounded-full"
                        src={logoUnderscored_Thibaut}
                        alt="logo Underscored_Thibaut"/>
                    <p className={"p-2 w-40"}>MASSY Thibaut</p>
                </div>
            </div>
        </p>
            <div className={"p-t-20 mx-auto max-w-lg text-center"}>
                <h2 className="font-display text-3xl tracking-tight text-black sm:text-4xl">
                    <b>Accueil</b>
                </h2>
                <p className="mt-4 text-lg tracking-tight text-black">
                    Les Multi Nationales sont implantées partout en ce monde. Leur surproduction et leur communication incite les personnes à consommer. Ce processus crée un cercle vicieux qui augmente la pollution de jour en jour.
                    Ce site vous permettra de constater les efforts pris, sur le plan écologique, aujourd`hui, par 2 géants de l`informatique : <b>Framework</b> et <b>DELL</b>.
                </p>
            </div>
    </Container>
  )
}
