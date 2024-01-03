const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function main() {
    
    const enero = await prisma.meses.create({
        data: {
          nombre: 'enero',
          dias: 30,
          ruta: '/calendario/enero'
        }
      });
 

    const febrero = await prisma.meses.create({
      data: {
        nombre: 'febrero',
        dias: 29,
        ruta: '/calendario/febrero'
      }
    });

    const marzo = await prisma.meses.create({
      data: {
        nombre: 'marzo',
        dias: 31,
        ruta: '/calendario/marzo'
      }
    });

    /*const permaPalooza = await prisma.eneroEventos.create({
      data: {
        nombre: 'PermaPalooza',
        fecha:  25,     
        descripcion: 'musica en vivo feria sustentable de permacultura en la aldea del encuentro...',
        categoria: 'Festival',
        contacto: 'permapalooza@gmail.com',
        ruta: '/permapalooza',
        imagen1: 'https://majomontemayor.com/wp-content/uploads/2019/05/Down-The-Rabbit-Hole-2018_Avond_BartHeemskerk_49_LQ-scaled.jpg',
        eslogan: 'ven a vivir la emoción de permapalooza'
      }
    });

    const permaPalooza2 = await prisma.eneroEventos.create({
      data: {
        nombre: 'PermaPalooza',
        fecha:  28,     
        descripcion: 'musica en vivo feria sustentable de permacultura en la aldea del encuentro...',
        categoria: 'Festival',
        contacto: 'permapalooza@gmail.com',
        ruta: '/permapalooza',
        imagen1: 'https://majomontemayor.com/wp-content/uploads/2019/05/Down-The-Rabbit-Hole-2018_Avond_BartHeemskerk_49_LQ-scaled.jpg',
        eslogan: 'ven a vivir la emoción de permapalooza'
      }
    });

    const permaPalooza3 = await prisma.febreroEventos.create({
      data: {
        nombre: 'PermaPalooza',
        fecha:  25,     
        descripcion: 'musica en vivo feria sustentable de permacultura en la aldea del encuentro...',
        categoria: 'Festival',
        contacto: 'permapalooza@gmail.com',
        ruta: '/permapalooza',
        imagen1: 'https://majomontemayor.com/wp-content/uploads/2019/05/Down-The-Rabbit-Hole-2018_Avond_BartHeemskerk_49_LQ-scaled.jpg',
        eslogan: 'ven a vivir la emoción de permapalooza'
      }
    });*/
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

