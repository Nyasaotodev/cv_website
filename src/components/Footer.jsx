import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import Image from "next/image";
import uphf from "@/images/uphf.png";
import cum from "@/images/CUM.png";

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <Image
              className="w-52"
              src={uphf}
              alt="logo uphf"/>
          <p className="text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} TaxPal. All rights
            reserved.
          </p>
          <Image
              className="w-52"
              src={cum}
              alt="logo cum"/>
        </div>
      </Container>
    </footer>
  )
}
