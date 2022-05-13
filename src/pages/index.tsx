/* eslint-disable @typescript-eslint/no-explicit-any */
import { HomePage } from '@components/organisms';
import { MainLayout } from '@components/template/Layouts';
import { postDataType } from '@libs/api/interfaces';
import { homePageData } from '@utils/constants';
import type { NextPage } from 'next';

const Home: NextPage<PropsType> = ({ data }) => {
	return (
		<MainLayout>
			<title>Home | Loop Education Network</title>
			<HomePage data={data} />
		</MainLayout>
	);
};

Home.getInitialProps = async () => {
	try {
		const data = await homePageData;
		return { data };
	} catch (error) {
		return { data: null };
	}
};

export default Home;

type PropsType = {
	data: postDataType[];
}

