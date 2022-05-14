/* eslint-disable @typescript-eslint/no-explicit-any */
import { Home } from '@components/organisms';
import { MainLayout } from '@components/template/Layouts';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
	return (
		<MainLayout>
			<title>Home | Loop Education Network</title>
			<Home />
		</MainLayout>
	);
};



export default HomePage;


