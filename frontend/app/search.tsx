'use client';

import { Input } from '@/components/ui/input';
import { SearchIcon, Spinner } from '@/components/icons';
import { useRouter } from 'next/navigation';
import { useTransition, useEffect, useRef, useState } from 'react';
import { SearchProps } from '../interfaces/search';

export function Search({ value: initialValue, basePath, placeholder }: SearchProps) {
	const router = useRouter();
	const inputRef = useRef<HTMLInputElement>(null);
	const [value, setValue] = useState(initialValue);
	
	const [isPending, startTransition] = useTransition();

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		console.log("🚀 ~ Search ~ value:", value)
		if (value === undefined) {
			return;
		} else if (value) {
			params.set('q', value);
		} else {
			params.delete('q');
		}

		startTransition(() => {
			router.replace(`${basePath}?${params.toString()}`);
		});
	}, [router, value, basePath]);

  return (
    <div className="relative">
      	<SearchIcon className="absolute left-2.5 top-3 h-4 w-4 text-gray-500" />
      	<Input
			ref={ inputRef }
			value={value ?? ''}
			onInput={(e) => {
			setValue(e.currentTarget.value);
			}}
			spellCheck={false}
			className="w-full bg-white shadow-none appearance-none pl-8"
			placeholder={placeholder}
      	/>
      {isPending && <Spinner />}
    </div>
  );
}