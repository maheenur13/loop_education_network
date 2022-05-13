import { Breadcrumbs } from '@components/atoms';
import Icon, { check } from '@libs/icons';
import { courseData } from '@utils/constants';
import {
	courseDetailBreadCrumb,
	courseDetailData,
	faqData,
	studentsReviewsData,
} from '@utils/constants/courseDetail.constants';
import NextImg from 'next/image';
import React, { FC, useState } from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { CourseCarousel } from '../Generics';
import { ExtraDetail } from './ExtraDetail';
import { ProdDetailPrice } from './ProdDetailPrice';
import { Prod_Title_Code_Review } from './Prod_Title_Code_Review';
import { StudentReview } from './StudentReview';

export const CourseDetail: FC<PropsType> = ({ data, breadCrumbsData }) => {
	const {
		tag,
		courseDetail: {
			title,
			imgURL,
			includes,
			rating_n_review: { rating, totalReview, ratings },
			price,
		},
	} = data;

	const tabs = ['Students Reviews', 'Recomanded Courses', 'FAQ'];
	const [activeTab, setActiveTab] = useState<string>(tabs[0]);

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
					<ExtraDetail data={data?.courseDetail} />
				</Col>
			</Row>
			<Wrapper>
				<Col md={6}>
					<h3 className="text-center text-underline">Course Includes</h3>
					<ul>
						{includes.map((el, i) => (
							<li key={i}>
								<Icon path={check} className="me-3" />
								{el}
							</li>
						))}
					</ul>
				</Col>
			</Wrapper>
			<div className="border-bottom mb-4">
				{tabs.map((el, i) => (
					<TabButtonWrapper
						key={i}
						className={`controller-btn ${el === activeTab ? 'active' : ''}`}
						onClick={() => setActiveTab(el)}
					>
						{el}
					</TabButtonWrapper>
				))}
			</div>
			{activeTab === 'Students Reviews' && <StudentReview reviews={studentsReviewsData} ratings={ratings} />}
			{activeTab === 'Recomanded Courses' && <CourseCarousel courseData={courseData} />}
			{activeTab === 'FAQ' && (
				<Accordion>
					{faqData.map((el, i) => (
						<Accordion.Item eventKey={`${i}`} key={i}>
							<Accordion.Header>{el.question}</Accordion.Header>
							<Accordion.Body className="text-dark">{el.ans}</Accordion.Body>
						</Accordion.Item>
					))}
				</Accordion>
			)}
		</>
	);
};

interface PropsType {
	data: typeof courseDetailData[0];
	breadCrumbsData: typeof courseDetailBreadCrumb;
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem 0;

	ul > li {
		list-style: none;
	}
	.col-md-6 {
		border: 1px solid var(--border);
		padding: 2rem;
		margin: 2rem 0;
	}
`;

const TabButtonWrapper = styled.button`
	border: none;
	outline: none;
	padding: 0.5rem 3rem;
	margin: 0 1rem;
	border-top-left-radius: 0.3rem;
	border-top-right-radius: 0.3rem;
	color: #787878;

	&.active {
		background-color: var(--bs-primary);
		color: white;
	}
`;
