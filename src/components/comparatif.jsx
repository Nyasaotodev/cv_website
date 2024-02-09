import { Container } from '@/components/Container'
import Image from "next/image";
import logoNya from "../images/avatars/Nyasaoto.png";
import logoHydler from "../images/avatars/Hydler.png";
import logoUnderscored_Thibaut from "../images/avatars/Underscored_Thibaut.png";
export function Comparatif() {
  return (
    <Container className="pb-16 pt-10 text-center lg:pt-10"
        id="comparatif">
        <h2 className="font-display text-3xl tracking-tight test-black sm:text-4xl md:text-5xl">
            Comparatif CMS / HTML CSS
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">

        </p>
        <div className={"p-t-20 mx-auto max-w-lg text-center"}>
                <h2 className="font-display text-3xl tracking-tight text-black sm:text-4xl">
                </h2>
            <p className="mt-4 text-lg tracking-tight text-black">
                <div>
                    <div>
                        <h2 className={"text-xl font-bold"}>CMS (Système de gestion de contenu)</h2><br/>

                        <b>Avantages :</b><br/>
                        <ul>
                            <li>
                                - Facilité d'utilisation : Ceux-ci ont généralement conviviaux et offrent une interface
                                intuitive pour gérer et mettre à jour le contenu du site.
                            </li>
                            <li>
                                - Rapidité de développement : Ceux-ci rendent possible la création d’un site Web
                                rapidement en
                                utilisant des templates déjà existantes.
                            </li>
                            <li>
                                - Gestion simplifiée : Cela permet de gérer facilement le contenu, d'ajouter de
                                nouvelles pages
                                et de mettre à jour le contenu existant sans nécessiter de connaissances approfondies en
                                programmation.
                            </li>
                        </ul>
                        <br/>
                        <b>Inconvénients :</b><br/>
                        <ul>
                            <li>
                                - Personnalisation limitée : Cela peut causer des limitations en termes de
                                personnalisation et
                                de flexibilité par rapport à la programmation HTML/CSS.
                            </li>
                            <li>
                                - Dépendance aux mises à jour : Ceux-ci nécessitent des mises à jour régulières pour
                                bénéficier
                                des dernières fonctionnalités et améliorations de sécurité.
                            </li>
                            <li>
                                - Performance : Cela peut parfois rendre le site plus lents en raison de la surcharge de
                                fonctionnalités et de plugins.
                            </li>
                        </ul>
                        <br/>
                    </div>
                    <div>
                        <h2 className={"text-xl font-bold"}>Programmation HTML/CSS (Site web fait à partir de zéro /
                            d’une
                            template)</h2><br/>

                        <b>Avantages :</b>
                        <ul>
                            <li>
                                - Flexibilité totale : Cela permet de créer un site Web entièrement personnalisé en
                                fonction des
                                besoins.
                            </li>
                            <li>
                                - Contrôle total : Cela permet d’avoir un contrôle total sur la structure, le style et
                                les
                                fonctionnalités du site en programmant directement en HTML/CSS.
                            </li>
                            <li>
                                - Performance optimale : Cela permet d’obtienir des performances optimales, en éliminant
                                les
                                fonctionalités inutilisés.
                            </li>
                        </ul>
                        <br/>
                        <b>Inconvénients :</b>
                        <ul>
                            <li>
                                - Courbe d'apprentissage : Cela nécessite une connaissance approfondie du langage et
                                peut
                                nécessiter une courbe d'apprentissage plus longue.
                            </li>
                            <li>
                                - Temps de développement : Cela peut être plus chronophage par rapport à l'utilisation
                                d'un CMS
                                préconstruit.
                            </li>
                            <li>
                                - Gestion du contenu complexe : Cela peut complexifier la gestion du contenu car il
                                faudra coder
                                manuellement chaque modification.
                            </li>
                        </ul>
                    </div>
                </div>
            </p>
        </div>
    </Container>
  )
}
