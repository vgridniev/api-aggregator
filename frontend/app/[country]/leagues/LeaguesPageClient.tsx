'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { fetchLeaguesByCountry } from '../../api/leagues';
import { League } from '../../../interfaces/league';
import { Search } from '../../search';
import { Spinner } from '@/components/icons';
import { pluralize } from '@/lib/utils';


const LeaguesPageClient = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const country = pathname.split('/')[1];
    const search = searchParams.get('q') || '';
    const [leagues, setLeagues] = useState<League[]>([]);
    const [requestDuration, setRequestDuration] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const hasFetchedData = useRef(false);

    useEffect(() => {
        if (hasFetchedData.current || !country) return;
    
        hasFetchedData.current = true;
        const fetchLeagues = async () => {
            setLoading(true);
            try {
                const data = await fetchLeaguesByCountry(country);
                setLeagues(data.leagues);
                setRequestDuration(data.requestDuration);
            } catch (error) {
                console.error('Error fetching leagues:', error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchLeagues();
    }, [country]);

    if (!country) return <Spinner />;

    const filteredLeagues = leagues.filter((league) =>
        league.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-4 relative">
        {loading ? (
            <Spinner />
        ) : (
            <>
                <h1 className="text-2xl font-bold">Found {filteredLeagues.length} {pluralize(filteredLeagues.length, 'league', 'leagues')} in {country}</h1>
                <p className='mt-4 mb-4'><strong>Request Duration:</strong> {requestDuration}</p>
                <div className="mb-4">
                    <Search value={search} basePath={`/${country}/leagues`} placeholder="Search league..." />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredLeagues.map((league) => (
                        <div
                            key={league.id}
                            className="flex flex-col items-center p-4 border rounded-lg"
                        >
                            <Image src={league.logo} alt={league.name} width={50} height={50} priority style={{ width: 'auto', height: 'auto' }} />
                            <span className="block mt-2 text-center">{league.name}</span>
                        </div>
                    ))}
                </div>
            </>
        )}
    </div>
  );
};

export default LeaguesPageClient;