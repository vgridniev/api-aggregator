import { useState, useEffect } from 'react';
import axios from 'axios';
import { League } from '../types';
import Image from 'next/image';

const CountryLeagues = ({ country }: { country: string }) => {
  const [leagues, setLeagues] = useState<League[]>([]);

  useEffect(() => {
    if (country) {
      axios.get(`/api/leagues/${country}`)
        .then(response => setLeagues(response.data))
        .catch(error => console.error(error));
    }
  }, [country]);

  return (
    <div>
      <h2>Leagues in {country}</h2>
      <ul>
        {leagues.map(league => (
          <li key={league.id}>
            <Image src={league.logo} alt={league.name} width={30} height={30} />
            <span>{league.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryLeagues;