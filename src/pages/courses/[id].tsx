import { CourseDetail } from '@components/organisms/CourseDetail';
import { MainLayout } from '@components/template/Layouts';
import { courseDetailBreadCrumb, courseDetailData } from '@utils/constants';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const CoursesDetail: NextPage = () => {
	const router = useRouter();
	console.log(router?.query?.id);
	return (
		<MainLayout>
			<title>Courses Detail | Loop Education Network</title>
			<CourseDetail
				data={courseDetailData.find((el) => el.courseID === router?.query?.id)}
				breadCrumbsData={courseDetailBreadCrumb}
			/>
		</MainLayout>
	);
};

export default CoursesDetail;
