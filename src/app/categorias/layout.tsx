import DinamicFooter from "../ui/footer"
import '../globals.css'
import arrow from '../../../public/arrow.png'
import Image from "next/image"
import Link from "next/link"

export default function Layout({ children }: { children: React.ReactNode }) {

  let href = '/'

    return (    
      <main className='w-full hide-scrollbar flex flex-col h-[80vh] overflow-main p-3'>
          {children}
      </main>
  )}
    