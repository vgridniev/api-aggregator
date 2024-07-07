'use client';

import './globals.css';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import { Logo, CountryIcon } from '@/components/icons';
import { NavItem } from './nav-item';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="h-full bg-gray-50">
		<head>
			<title>Football API Admin Dashboard</title>
			<meta name="description" content="Admin dashboard for managing countries and leagues from the Football API" />
      	</head>
		<body>
			<div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
			<div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
				<div className="flex h-full max-h-screen flex-col gap-2">
				<div className="flex h-[60px] items-center border-b px-5">
					<Link className="flex items-center gap-2 font-semibold" href="/">
						<Logo />
						<div className="flex flex-col">
							<span>Webmil Web Production</span>
							<span  className="text-xs">Test task</span>
						</div>
					</Link>
				</div>
				<div className="flex-1 overflow-auto py-2">
					<nav className="grid items-start px-4 text-sm font-medium">
					<NavItem href="/countries">
						<CountryIcon className="h-4 w-4" />
						Countries
					</NavItem>
					</nav>
				</div>
				</div>
			</div>
			<div className="flex flex-col">
				<header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 justify-between lg:justify-end">
				<Link className="flex items-center gap-2 font-semibold lg:hidden" href="/">
					<Logo />
					<span className="">Webmil Web Production</span>
					
				</Link>
				</header>
				{children}
			</div>
			</div>
			<Analytics />
		</body>
		</html>
	);
}
