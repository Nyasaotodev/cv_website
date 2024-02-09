import Image from "next/image"

import { Container } from "@/components/Container"
import backgroundImage from "@/images/background-call-to-action.jpg"
import { Button } from "@/components/Button"
export function Charte() {
  return (
    <section
      id="charte"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl justify-center">
            <b>Charte Informatique</b>
            <a href="https://drive.google.com/file/d/1_YuuSHP8kg8nAkrJx4vV9YhVLU6jtA3n/view" download="Charte_info.pdf" className={"ml-[650px] text-xl hover:bg-white hover:bg-opacity-25 p-3 hover:rounded-full"}>
              <span>
                télécharger
              </span>
            </a>
          </h2>
          <div className="mt-4 text-lg tracking-tight text-black bg-amber-50 rounded p-10">
            D’une manière générale, l’utilisateur doit s’imposer le respect des lois Françaises & Européennes.<br/><br/>
            <ol className={"list-decimal"}>
              <li>
                <b>Accès au compte</b><br/>
                L’identification permet, à chaque connexion, l’attribution des droits à chaque utilisateur sur les
                ressources du système.<br/><br/>

                Un identifiant (nom d’utilisateur + mot de passe) unique est confiée à chaque personne. La personne
                concernée assume personnellement la responsabilité de l`utilisation qui pourrait en découler et ne doit
                en
                aucun cas le divulguer.<br/><br/>

                Chaque mot de passe doit obligatoirement suivre les directives suivantes :

                <ul className={"mx-10 list-disc"}>
                  <li>Faire plus de 12 caractères</li>
                  <li>
                    Inclure au moins une occurrence de type de caractères :
                    <ul className={"mx-10 list-square"}>
                      <li>Minuscule</li>
                      <li>Majuscule</li>
                      <li>Chiffre</li>
                      <li>Spécial</li>
                    </ul>
                  </li>
                  <li>Être changé au minimum une fois toute les six mois</li>
                </ul>
                <br/><br/>
              </li>
              <li>
                <b>Courrier électronique</b><br/>
                Un message envoyé par Internet peut potentiellement être intercepté et lu par n’importe qui. Par
                conséquent, il est impératif que toute information stratégique ne soit pas échangée de cette manière, à
                moins qu`elle n`ait été préalablement chiffrée & que le secret ait été transmit par un autre moyen de
                communication.<br/><br/>
                Les messages électroniques sont conservés sur le serveur de messagerie pendant une période de 90 jours
                et il existe des copies de sauvegarde pendant une période de 360 jours.<br/><br/>
                Il est interdit d`utiliser des services d’intelligence artificielle pour traiter quelconque donnée de
                l’entreprise.<br/><br/>
                <ul className={"mx-10"}>
                  <li>
                    <b>2.1 Utilisation privée de la messagerie</b><br/>
                    L’utilisation du courrier électronique à des fins personnelles est autorisée dans des proportions
                    raisonnables et à la condition de ne pas affecter le trafic normal des messages professionnels.<br/><br/>
                  </li>
                  <li>
                    <b>2.2 Contrôle de l`usage</b><br/>
                    Le contrôle porte sur:
                    <ul className={"mx-10 list-disc"}>
                      <li>Nombre & destinataires des messages échangés</li>
                      <li>Taille & contenu des messages échangés</li>
                      <li>Format & contenu des pièces jointes</li>

                      <br/>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <b>Utilisation d`Internet</b>
                <ul>
                  <li>
                    Chaque utilisateur doit prendre conscience qu`il est dangereux pour l`entreprise de :
                    <ul className={"mx-10 list-disc"}>
                      <li>Communiquer à des tiers des informations techniques concernant son matériel</li>
                      <li>Diffuser des informations sur l`entreprise sur le web</li>
                      <li>Participer à des forums & conversations en ligne</li>
                    </ul>
                    <br/><br/>
                  </li>
                  <li>
                    <b>3.1 Utilisation privée d`Internet</b><br/>
                    L’utilisation d’Internet à des fins personnelles est autorisée dans des proportions raisonnables et
                    à la condition de ne pas affecter le trafic normal des messages professionnels.<br/><br/>
                  </li>
                  <li>
                    <b>3.2 Contrôle de l`usage</b><br/>
                    Le contrôle porte sur:
                      <ul className={"mx-10 list-disc"}>
                        <li>Durées des connexions & leurs destinations</li>
                        <li>Fréquence des connexions & leurs date/heure</li>
                      </ul>
                    La politique et les modalités des contrôles font l`objet de discussions avec les représentants du personnel.<br/><br/>
                  </li>
                </ul>
              </li>
              <li>
                <b>Pare-feu</b><br/>
                Le pare-feu vérifie tout le trafic entrant & sortant de l`entreprise, cherchant des sites non-autorisés, des fichiers malveillants, etc.<br/><br/>
                Il détient toutes les traces de l`activité qui transite par lui:
                <ul className={"mx-10 list-disc"}>
                  <li>
                    Navigation sur Internet :
                    <ul className={"mx-10 list-square"}>
                      <li>Sites visités</li>
                      <li>Heures des visites</li>
                      <li>Éléments téléchargés & leur format</li>
                    </ul>
                  </li>
                  <li>
                    Messages envoyés et reçus :
                    <ul className={"mx-10 list-square"}>
                      <li>Expéditeur</li>
                      <li>Destinataires</li>
                      <li>Objet & contenu</li>
                      <li>Format & contenu de/des pièce(s) jointe(s)</li>
                    </ul>
                    Il filtre les URL des sites non autorisés par le principe de liste noire. Les contenus visés sont potentiellement dangereux, malveillants, inappropriés ou non conformes aux politiques de sécurité de l`entreprise.<br/><br/>
                  </li>
                </ul>
              </li>
              <li>
                <b>Sauvegardes</b><br/>
                Le système comporte des dispositifs de protection des informations ainsi qu’un dispositif miroir destiné à doubler le système en cas de défaillance.<br/><br/>
                Ceci implique, entre autres, que la suppression par un utilisateur d`un fichier de son disque dur n’est pas absolue et qu’il en reste une copie sur :
                <ul className={"mx-10 list-disc"}>
                  <li>Dispositif de sauvegarde & miroir</li>
                  <li>Serveur central</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </Container>
    </section>
  )
}
