import { NavItem } from './nav-item';
import { Button } from '@/components/ui/button';

export default async function IndexPage() {
  return (
    <div className="flex flex-col items-center min-h-screen py-8">
		<h1 className="text-4xl font-bold mb-6">Welcome to the Home Page</h1>
		<p className="text-2xl mb-6 mt-6">You can navigate to the</p>
		<div className="mt-4">
			<NavItem href="/countries">
				<Button variant="default" size="default">Countries Page</Button>
			</NavItem>
		</div>
    </div>
  );
}
