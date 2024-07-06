import dynamic from 'next/dynamic';

const CountriesPageClient = dynamic(() => import('./CountriesPageClient'), {
  ssr: false,
});

const CountriesPage = async () => {
  return <CountriesPageClient />;
};

export default CountriesPage;