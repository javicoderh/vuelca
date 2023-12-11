import { sql } from '@vercel/postgres';

import { Permacultura } from './definitions'; 

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

