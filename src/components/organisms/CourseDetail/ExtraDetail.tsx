import { courseDetailData } from '@utils/constants';
import React, { FC } from 'react';

export const ExtraDetail: FC<PropsType> = ({ data }) => {
	const { instructors, language, lastUpdated, numberOfStudents } = data;
	return (
		<div>
			{instructors?.length > 0 && (
				<p>
					Course By: {instructors[0]}{' '}
					{instructors?.length > 1 && `+ ${instructors.length - 1} more instructors`}
				</p>
			)}
			<p>Language: {language.map((el) => el + ', ')}</p>
			<p>Last updated: {lastUpdated}</p>
			<p>Number of students: {numberOfStudents} students enrolled</p>
		</div>
	);
};

interface PropsType {
	data: typeof courseDetailData[0]['courseDetail'];
}
