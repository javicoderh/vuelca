 import { sql } from '@vercel/postgres';

 import { Permacultura, EneroEventos, FebreroEventos, MarzoEventos, AbrilEventos, MayoEventos, JunioEventos, JulioEventos, AgostoEventos, SeptiembreEventos, OctubreEventos, NoviembreEventos, DiciembreEventos, Meses, EmpresasSalud } from './definitions'; 

 export async function fetchPermacultura() {
   try {
     console.log('Fetching permacultura data...');
     await new Promise((resolve) => setTimeout(resolve, 1000));
    
     const data = await sql<Permacultura>`SELECT permacultura.name, permacultura.description
     FROM permacultura`;
     console.log(data.rows)
     console.log('Permacultura data fetch completed.');
     return data.rows;
    
   } catch (error) {
     console.error('Database Error:', error);
     throw new Error('Failed to fetch permacultura data.');
   }
 }

export async function fetchMesesTodos() {
  try {
    console.log('Fetching meses data...');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const data = await sql<Meses>`SELECT meses.nombre, meses.dias, meses.ruta
    FROM meses`;
    console.log(data.rows)
    console.log('meses data fetch completed.');
    return data.rows;
    
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch meses data.');
  }
}

export async function fetchEnero() {
  try {
    console.log('Fetching eventos enero data...');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    const data = await sql<EneroEventos>`SELECT eneroeventos.nombre, eneroeventos.fecha, eneroeventos.descripcion, eneroeventos.imagen1, eneroeventos.mes
    FROM eneroeventos`;
    console.log(data.rows)
    console.log('Enero data fetch completed.');
    return data.rows;
    
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Enero data.');
  }
}

export async function fetchFebrero() {
  try {
    console.log('Fetching eventos febrero data...');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const data = await sql<FebreroEventos>`SELECT febreroeventos.nombre, febreroeventos.fecha, febreroeventos.descripcion, febreroeventos.imagen1, febreroeventos.mes 
    FROM febreroeventos`;
    console.log(data.rows)
    console.log('febrero data fetch completed.');
    return data.rows;
    
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch febrero data.');
  }
}

export async function fetchMarzo() {
  try {
    console.log('Fetching eventos marzo data...');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const data = await sql<MarzoEventos>`SELECT marzoeventos.nombre, marzoeventos.fecha, marzoeventos.descripcion, marzoeventos.imagen1, marzoeventos.mes
    FROM marzoeventos`;
    console.log(data.rows)
    console.log('marzo data fetch completed.');
    return data.rows;
    
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch marzo data.');
  }
}

export async function fetchAbril() {
  try {
    console.log('Fetching eventos abril data...');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const data = await sql<AbrilEventos>`SELECT abrileventos.nombre, abrileventos.fecha, abrileventos.descripcion, abrileventos.imagen1, abrileventos.mes 
    FROM abrileventos`;
    console.log(data.rows)
    console.log('abril data fetch completed.');
    return data.rows;
    
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch abril data.');
  }
}

export async function fetchMayo() {
  try {
    console.log('Fetching eventos mayo data...');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const data = await sql<MayoEventos>`SELECT mayoeventos.nombre, mayoeventos.fecha, mayoeventos.descripcion, mayoeventos.imagen1, mayoeventos.mes 
    FROM mayoeventos`;
    console.log(data.rows)
    console.log('mayo data fetch completed.');
    return data.rows;
    
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch mayo data.');
  }
}

export async function fetchJunio() {
  try {
    console.log('Fetching eventos junio data...');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const data = await sql<JunioEventos>`SELECT junioeventos.nombre, junioeventos.fecha, junioeventos.descripcion, junioeventos.imagen1, junioeventos.mes 
    FROM junioeventos`;
    console.log(data.rows)
    console.log('junio data fetch completed.');
    return data.rows;
    
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch junio data.');
  }
}

export async function fetchJulio() {
  try {
    console.log('Fetching eventos julio data...');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const data = await sql<JulioEventos>`SELECT julioeventos.nombre, julioeventos.fecha, julioeventos.descripcion, julioeventos.imagen1, julioeventos.mes 
    FROM julioeventos`;
    console.log(data.rows)
    console.log('julio data fetch completed.');
    return data.rows;
    
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch julio data.');
  }
}

export async function fetchAgosto() {
  try {
    console.log('Fetching eventos agosto data...');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const data = await sql<AgostoEventos>`SELECT agostoeventos.nombre, agostoeventos.fecha, agostoeventos.descripcion, agostoeventos.imagen1, agostoeventos.mes 
    FROM agostoeventos`;
    console.log(data.rows)
    console.log('agosto data fetch completed.');
    return data.rows;
    
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch agosto data.');
  }
}

export async function fetchSeptiembre() {
  try {
    console.log('Fetching eventos septiembre data...');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const data = await sql<SeptiembreEventos>`SELECT septiembreeventos.nombre, septiembreeventos.fecha, septiembreeventos.descripcion, septiembreeventos.imagen1, septiembreeventos.mes 
    FROM septiembreeventos`;
    console.log(data.rows)
    console.log('septiembre data fetch completed.');
    return data.rows;
    
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch septiembre data.');
  }
}

export async function fetchOctubre() {
  try {
    console.log('Fetching eventos octubre data...');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const data = await sql<OctubreEventos>`SELECT octubreeventos.nombre, octubreeventos.fecha, octubreeventos.descripcion, octubreeventos.imagen1, octubreeventos.mes 
    FROM octubreeventos`;
    console.log(data.rows)
    console.log('octubre data fetch completed.');
    return data.rows;
    
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch octubre data.');
  }
}

export async function fetchNoviembre() {
  try {
    console.log('Fetching eventos noviembre data...');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const data = await sql<NoviembreEventos>`SELECT noviembreeventos.nombre, noviembreeventos.fecha, noviembreeventos.descripcion, noviembreeventos.imagen1, noviembreeventos.mes
    FROM noviembreeventos`;
    console.log(data.rows)
    console.log('noviembre data fetch completed.');
    return data.rows;
    
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch noviembre data.');
  }
}

export async function fetchDiciembre() {
  try {
    console.log('Fetching eventos diciembre data...');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const data = await sql<DiciembreEventos>`SELECT diciembreeventos.nombre, diciembreeventos.fecha, diciembreeventos.descripcion, diciembreeventos.imagen1, diciembreeventos.mes 
    FROM diciembreeventos`;
    console.log(data.rows)
    console.log('diciembre data fetch completed.');
    return data.rows;
    
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch diciembre data.');
  }
}

export async function fetchEmpresasSalud() {
  try {
    console.log('Fetching empresas salud data...');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    const data = await sql<EmpresasSalud>`SELECT empresassalud.nombreempresa, empresassalud.descripcion, empresassalud.mail, 
    empresassalud.telefono, empresassalud.imagen1, empresassalud.imagen2, empresassalud.logo, empresassalud.categoria, empresassalud.ruta, empresassalud.clickscount, 
    String 
    descripcion    String
    mail           String
    telefono       String
    imagen1        String
    imagen2        String
    logo           String
    categoria      String
    ruta           String
    clickscount    Int
    FROM empresassalud`;
    console.log(data.rows)
    console.log('empresas salud data fetch completed.');
    return data.rows;
    
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch empresas salud data.');
  }
}