'use client'

import { useEffect, useState } from "react"
import { Tab } from "@headlessui/react"
import clsx from "clsx"

import { Container } from "@/components/Container"
const features = [
  {
    title: "Framework",
    description:
      "Apprennez en plus a propos de l`entreprise Framework",
    text: <p>
      Framework Computer se concentre sur la conception de produits modulaires, ce qui facilite leur réparation et leur mise à niveau. Cela prolonge la durée de vie des produits et réduit la quantité de déchets électroniques. De plus, Framework utilise des composants économes en énergie, ce qui permet de diminuer la consommation d`électricité. L`entreprise privilégie également des emballages écologiques et recyclables, réduisant ainsi les déchets d`emballage. Enfin, Framework est transparente sur les émissions de carbone liées à la production et à l`expédition de ses produits, ce qui permet aux consommateurs de prendre des décisions éclairées.
    </p>
},
{
title: "DELL",
    description
:
"Apprennez en plus a propos de l`entreprise DELL",
    text: <p>
      Dell Technologies met en œuvre plusieurs initiatives pour réduire son empreinte numérique. L`entreprise utilise des matériaux recyclés dans la fabrication de ses produits, ce qui contribue à diminuer la quantité de déchets électroniques. De plus, Dell optimise l`efficacité énergétique de ses produits, ce qui permet de réduire la consommation d`énergie. L`entreprise dispose également d`un programme de recyclage des produits en fin de vie, ce qui favorise la réutilisation des composants et réduit l`impact environnemental. Enfin, Dell sensibilise ses employés à l`empreinte carbone, les encourageant à adopter des pratiques plus durables.
    </p>
},
]

export function Empreinte() {
  let [tabOrientation, setTabOrientation] = useState("horizontal")

  useEffect(() => {
    let lgMediaQuery = window.matchMedia("(min-width: 1024px)")

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? "vertical" : "horizontal")
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener("change", onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="empreinte"
      aria-label="Features for running your books"
      className="relative overflow-hidden pb-28 pt-20 sm:py-32 text-black"
    >

      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight test-black sm:text-4xl md:text-5xl">
            Empreinte Numérique
          </h2>
          <p className="mt-6 text-lg tracking-tight text-black">
            Dans cette section vous retrouverez toutes les informations néscessairez sur l`empreinte numérique des entreprises Framework et DELL.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
              <>

                <Tab.Panels className="lg:col-span-7">
                  {features.map((feature) => (
                      <Tab.Panel key={feature.title} unmount={false}>
                        <div className="relative sm:px-6 lg:hidden">
                          <div
                              className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem]  ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl"/>
                        </div>
                        <div
                            className="mt-10 lg:pr-96 overflow-hidden rounded-xl sm:w-auto lg:mt-0 lg:w-[67.8125rem] test-black sm:text-center">
                          {feature.text}
                        </div>
                      </Tab.Panel>
                  ))}
                </Tab.Panels>
                <div
                    className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                  <Tab.List
                      className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                    {features.map((feature, featureIndex) => (
                        <div
                            key={feature.title}
                            className={clsx(
                                'group relative rounded-full px-4 py-1 lg:rounded-r-xl lg:rounded-l-none lg:p-6',
                                selectedIndex === featureIndex
                                    ? 'bg-blue-600 lg:bg-blue-600/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                                    : 'hover:bg-white/10 lg:hover:bg-white/5',
                            )}
                        >
                          <h3>
                            <Tab
                                className={clsx(
                                    'font-display text-lg ui-not-focus-visible:outline-none',
                                    selectedIndex === featureIndex
                                        ? 'text-white lg:test-black'
                                        : 'text-white hover:test-black lg:test-black',
                                )}
                            >
                              <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none text-white"/>
                              {feature.title}
                            </Tab>
                          </h3>
                          <p
                              className={clsx(
                                  'mt-2 hidden text-sm lg:block',
                                  selectedIndex === featureIndex
                                      ? 'test-black'
                                      : 'text-blue-400 group-hover:test-black',
                              )}
                          >
                            {feature.description}
                          </p>
                        </div>
                    ))}
                  </Tab.List>
                </div>
              </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
