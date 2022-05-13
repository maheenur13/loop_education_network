import { Breadcrumbs } from '@components/atoms';
import { courseDetailBreadCrumb, courseDetailData } from '@utils/constants/courseDetail.constants';
import NextImg from 'next/image';
import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ProdDetailPrice } from './ProdDetailPrice';
import { Prod_Title_Code_Review } from './Prod_Title_Code_Review';

export const CourseDetail: FC<PropsType> = ({ data, breadCrumbsData }) => {
	const {
		tag,
		courseDetail: {
			title,
			imgURL,

			rating_n_review: { rating, totalReview },
			price,
		},
	} = data;
	return (
		<>
			<Breadcrumbs
				data={[
					...breadCrumbsData,
					{
						href: '',
						title: title,
					},
				]}
			/>
			<Row className="mt-4">
				<Col md={4}>
					<NextImg src={imgURL} height={300} width={400} />
				</Col>
				<Col md={8}>
					<Prod_Title_Code_Review title={title} tag={tag} rating={rating} review={totalReview} />
					<ProdDetailPrice regularPrice={price} />
				</Col>
			</Row>
		</>
	);
};

interface PropsType {
	data: typeof courseDetailData[0];
	breadCrumbsData: typeof courseDetailBreadCrumb;
}
