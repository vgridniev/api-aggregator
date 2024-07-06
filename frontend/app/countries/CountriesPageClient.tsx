'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { fetchCountries } from '../api/countries';
import { Country } from '../../interfaces/country';
import { Search } from '../search';
import { useSearchParams } from 'next/navigation';

const CountriesPageClient = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [requestDuration, setRequestDuration] = useState<string>('');

    const searchParams = useSearchParams();
    const search = searchParams.get('q') || '';
    const router = useRouter();
   

    useEffect(() => {
        let isMounted = true;
        const getCountries = async () => {
            try {
                const data = await fetchCountries();
                console.log("🚀 ~ getCountries ~ data1:", data);
                if (isMounted) {
                    console.log("🚀 ~ getCountries ~ data2:", data);
                    setCountries(data.countries);
                    setRequestDuration(data.requestDuration);
                }
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        getCountries();

        return () => {
            isMounted = false;
        };
    }, []);

    const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      );

    const handleCountryClick = (countryName: string) => {
        router.push(`/${countryName}/leagues`);
      };

  return (
    <div className="p-4">
        <h1 className="text-2xl">Found <strong>{filteredCountries.length}</strong> countries</h1>
        <p className='mt-4 mb-4'><strong>Request Duration:</strong> {requestDuration}</p>
        <div className="mb-4">
            <Search value={search} basePath="/countries" placeholder="Search country..." />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 mb-4">
            {filteredCountries.map((country) => (
                <div
                    key={country.id}
                    className="flex flex-col items-center p-4 border rounded-lg bg-gray-100/40 hover:bg-gray-200/40 cursor-pointer"
                    onClick={() => handleCountryClick(country.name)}
                >
                    <Image src={country.flag} alt={country.name} width={50} height={30} priority style={{ width: 'auto', height: 'auto' }} />
                    <span className="block mt-2">{country.name}</span>
                </div>
            ))}
        </div>
    </div>
  );
};

export default CountriesPageClient;