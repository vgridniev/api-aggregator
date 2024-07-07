'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { fetchCountries } from '../api/countries';
import { Country } from '../../interfaces/country';
import { Search } from '../search';
import { useSearchParams } from 'next/navigation';
import { Spinner } from '@/components/icons';
import { useInView } from 'react-intersection-observer';

const LazyImage = ({ src, alt }: { src: string; alt: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="w-full h-20 flex items-center justify-center">
      {inView ? <Image src={src} alt={alt} width={100} height={60} priority /> : null}
    </div>
  );
};

const CountriesPageClient = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [requestDuration, setRequestDuration] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const hasFetchedData = useRef(false);

  const searchParams = useSearchParams();
  const search = searchParams.get('q') || '';
  const router = useRouter();

  useEffect(() => {
    if (hasFetchedData.current) return;

    hasFetchedData.current = true;
    const getCountries = async () => {
      setLoading(true);
      try {
        const data = await fetchCountries();
        setCountries(data.countries);
        setRequestDuration(data.requestDuration);
      } catch (error) {
        console.error('Error fetching countries:', error);
      } finally {
        setLoading(false);
      }
    };

    getCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCountryClick = (countryName: string) => {
    router.push(`/${countryName}/leagues`);
  };

  return (
    <div className="p-4 relative">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="text-2xl">Found <strong>{filteredCountries.length}</strong> countries</h1>
          <p className='mt-4 mb-4'><strong>Request Duration:</strong> {requestDuration}</p>
          <div className="mb-4">
            <Search value={search} basePath="/countries" placeholder="Search country..." />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-4">
            {filteredCountries.map((country) => (
              <div
                key={country.id}
                className="flex flex-col items-center p-4 border rounded-lg bg-gray-100/40 hover:bg-gray-200/40 cursor-pointer"
                onClick={() => handleCountryClick(country.name)}
              >
                <LazyImage src={country.flag} alt={country.name} />
                <span className="block mt-2">{country.name}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CountriesPageClient;
