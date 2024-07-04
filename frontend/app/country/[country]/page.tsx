"use client";

import { useParams } from 'next/navigation';
import CountryLeagues from '../../../components/CountryLeagues';

export default function CountryPage() {
  const params = useParams();
  const country = Array.isArray(params.country) ? params.country[0] : params.country;

  return (
    <div>
      <CountryLeagues country={country} />
    </div>
  );
}