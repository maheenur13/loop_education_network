/* eslint-disable @typescript-eslint/no-explicit-any */
import { HomePage } from '@components/organisms';
import { MainLayout } from '@components/template/Layouts';
import { newsAPI } from '@libs/api/news';
import type { NextPage } from 'next';

const Home: NextPage<any> = ({ data }) => {
	return (
		<MainLayout>
			<title>Home | Loop Education Network</title>
			<HomePage data={data} />
		</MainLayout>
	);
};

Home.getInitialProps = async () => {
	try {
		const data = await newsAPI.getTeslaNews();
		return { data: data };
	} catch (error) {
		return { data: null };
	}
};

export default Home;
