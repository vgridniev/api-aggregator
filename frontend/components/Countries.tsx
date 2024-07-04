import { useState, useEffect } from 'react';
import axios from 'axios';
import { Country } from '../types';
import Image from 'next/image';
import { Input } from './ui/input';

const Countries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('/api/countries')
      .then(response => setCountries(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <Input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search countries..." />
      <ul>
        {countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase())).map(country => (
          <li key={country.code}>
            <Image src={country.flag} alt={country.name} width={30} height={20} />
            <span>{country.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
