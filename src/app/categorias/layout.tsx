import DinamicFooter from "../ui/footer"
import '../globals.css'
import arrow from '../../../public/arrow.png'
import Image from "next/image"
import Link from "next/link"
import calendario from '../../../public/timetable.png'

export default function Layout({ children }: { children: React.ReactNode }) {

  let hrefCalendario = '/calendario'

    return (    
      <main className='w-full flex flex-col h-[80vh] overflow-main p-3'>
          {children}
      </main>
  )}
    