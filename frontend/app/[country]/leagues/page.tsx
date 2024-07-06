import dynamic from 'next/dynamic';

const LeaguesPageClient = dynamic(() => import('./LeaguesPageClient'), {
  ssr: false,
});

const LeaguesPage = () => {
  return <LeaguesPageClient />;
};

export default LeaguesPage;