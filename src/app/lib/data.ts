import { sql } from '@vercel/postgres';

import { Permacultura, EneroEventos, FebreroEventos, MarzoEventos, Meses } from './definitions'; 

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
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const data = await sql<EneroEventos>`SELECT eneroEventos.nombre, eneroEventos.fecha, eneroEventos.descripcion, eneroEventos.imagen1
    FROM eneroEventos`;
    console.log(data.rows)
    console.log('Enero data fetch completed.');
    return data.rows;
    
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Enero data.');
  }
}
