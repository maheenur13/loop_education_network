import { MainLayout, ResearchPanelUnit } from '@components/templates';
import { NextPage } from 'next';

const ResearchPanel: NextPage = () => {
	return (
		<MainLayout>
			{/* <h4 className="text-center text-light mt-3">Coming soon...</h4> */}

			<ResearchPanelUnit />
		</MainLayout>
	);
};

export default ResearchPanel;
