/* eslint-disable @typescript-eslint/no-explicit-any */
import { HomePage } from '@components/organisms';
import { MainLayout } from '@components/template/Layouts';
import { newsAPI } from '@libs/api/news';
import { homePageData } from '@utils/constants';
import type { NextPage } from 'next';

const Home: NextPage<any> = ({ data }) => {
	console.log(data);

	return (
		<MainLayout>
			<title>Home | Loop Education Network</title>
			<HomePage data={homePageData} />
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
