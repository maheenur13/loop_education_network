import { MainLayout, ProjectPanelUnit } from '@components/template';
// import { MainLayout } from '@components/template/Layouts';
import { NextPage } from 'next';

const ProjectsPanel: NextPage = () => {
	return (
		<MainLayout>
			{/* <h4 className="text-center text-light mt-3">Coming soon...</h4> */}

			<ProjectPanelUnit />
		</MainLayout>
	);
};

export default ProjectsPanel;
