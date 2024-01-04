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
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    const data = await sql<EneroEventos>`SELECT eneroeventos.nombre, eneroeventos.fecha, eneroeventos.descripcion, eneroeventos.imagen1
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
    
    const data = await sql<FebreroEventos>`SELECT febreroeventos.nombre, febreroeventos.fecha, febreroeventos.descripcion, febreroeventos.imagen1 
    FROM febreroeventos`;
    console.log(data.rows)
    console.log('febrero data fetch completed.');
    return data.rows;
    
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch febrero data.');
  }
}
