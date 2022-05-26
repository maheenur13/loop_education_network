import { Home } from '@components/organisms';
import { MainLayout } from '@components/templates/Layouts';
import { NextPage } from 'next';

const NewsFeed: NextPage = () => {
	return (
		<MainLayout>
			<title>Home | Loop Education Network</title>
			<Home />
		</MainLayout>
	);
};

export default NewsFeed;
