import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get('http://localhost:4000/api/countries');
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch countries' }, { status: 500 });
  }
}