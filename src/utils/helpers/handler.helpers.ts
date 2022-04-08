import { KeyboardEvent } from 'react';

const pages = ['books', 'people', 'project'];

export const isHomepage = (pathname: string): boolean => {
	const arr = pathname.split('/');
	if (pages.includes(arr[1])) return false;
	return true;
};
export const handleNumberOnly = (e: KeyboardEvent<HTMLInputElement>): void | boolean => {
	const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace', 'Tab'];
	const { key } = e;
	if (keys.find((e) => e === key)) return true;
	e.preventDefault();
};

export const findPage = (pathname: string): boolean => {
	const arr = pathname.split('/');
	if (pages.includes(arr[1])) return false;
	return true;
};

export const handleLinkChange = (href: string, pathname: string): string => {
	//href e.g: '/page';
	if (isHomepage(pathname)) return `${href}`;
	return `/${pathname.split('/')[1]}${href}`;
};

export const handleRouteChange = (href: string, pathname: string): string => {
	// path e.g: '/page';
	if (!isHomepage(pathname)) return `/${pathname.split('/')[1]}${href}`;
	// else is under construction!!
};
