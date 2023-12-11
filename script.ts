const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function main() {
    
    const bioconstruccion = await prisma.permacultura.create({
        data: {
          name: 'Bioconstrucción',
          description: 'La bioconstrucción es la construcción mediante tecnicas ...',
          category: 'permacultura',
          contact: '+569991394',
          route: '/bioconstrucción'
        }
      });
      
      const agroecologia = await prisma.permacultura.create({
        data: {
          name: 'Agroecología, huertas y fertilizantes',
          description: 'construcción de huertas organicas en base a fertilizantes naturales...',
          category: 'permacultura',
          contact: '+569991395',
          route: '/anotherRoute'
        }
      });      
      
      const gestionResiduos = await prisma.permacultura.create({
        data: {
          name: 'Gestión de residuos',
          description: 'gestiona tus residuos para que puedan ser reciclados y compostados...',
          category: 'permacultura',
          contact: '+569991395',
          route: '/anotherRoute'
        }
      });
      
      const manejoAguas = await prisma.permacultura.create({
        data: {
          name: 'Manejo de aguas',
          description: 'administra tus aguas para reducir el gasto y contaminar menos...',
          category: 'permacultura',
          contact: '+569991395',
          route: '/anotherRoute'
        }
      });
      
      const asentamientos = await prisma.permacultura.create({
        data: {
          name: 'Asentamientos sustentables, locales y nacionales',
          description: 'modernos asentamientos hechos en base a tecnicas de construcción...',
          category: 'permacultura',
          contact: '+569991395',
          route: '/anotherRoute'
        }
      });
    }

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })