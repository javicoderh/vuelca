const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function main() {
    
    /*const abril = await prisma.meses.create({
        data: {
          nombre: 'abril',
          dias: 30,
          ruta: '/calendario/abril'
        }
      });
 

    const mayo = await prisma.meses.create({
      data: {
        nombre: 'mayo',
        dias: 31,
        ruta: '/calendario/mayo'
      }
    });

    const junio = await prisma.meses.create({
      data: {
        nombre: 'junio',
        dias: 30,
        ruta: '/calendario/junio'
      }
    });

    const julio = await prisma.meses.create({
      data: {
        nombre: 'julio',
        dias: 31,
        ruta: '/calendario/julio'
      }
    });


  const agosto = await prisma.meses.create({
    data: {
      nombre: 'agosto',
      dias: 31,
      ruta: '/calendario/agosto'
    }
  });

  const septiembre = await prisma.meses.create({
    data: {
      nombre: 'septiembre',
      dias: 30,
      ruta: '/calendario/septiembre'
    }
  });

  const octubre = await prisma.meses.create({
    data: {
      nombre: 'octubre',
      dias: 31,
      ruta: '/calendario/octubre'
    }
  });


const noviembre = await prisma.meses.create({
  data: {
    nombre: 'noviembre',
    dias: 30,
    ruta: '/calendario/noviembre'
  }
});

const diciembre = await prisma.meses.create({
  data: {
    nombre: 'diciembre',
    dias: 31,
    ruta: '/calendario/diciembre'
  }
});
*/
    const permaPalooza = await prisma.eneroEventos.create({
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

    const permaPalooza3 = await prisma.eneroEventos.create({
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
  

  const permaPalooza4 = await prisma.febreroEventos.create({
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

  const permaPalooza5 = await prisma.febreroEventos.create({
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

  const permaPalooza6 = await prisma.febreroEventos.create({
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

