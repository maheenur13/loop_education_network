import { MainLayout, SingleResearchUnit } from '@components/templates';
import { NextPage } from 'next';
import React from 'react';

const SingleResearch: NextPage = () => {
	return (
		<MainLayout>
			<SingleResearchUnit />
		</MainLayout>
	);
};

export default SingleResearch;
