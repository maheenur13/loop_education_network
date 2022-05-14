/* eslint-disable @typescript-eslint/no-explicit-any */
import { postDataType } from '@libs/api/interfaces';
import { homePageData } from '@utils/constants';
import { FC, useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { NewsCard } from '../Generics';

export const Home: FC = () => {
	const [data, setData] = useState<postDataType[]>();
	// console.log(data);
	useEffect(() => {
		const callData = async () => {
			try {
				const data = await homePageData;
				setData(data);
			} catch (error) {
				setData(null);
			}
		}
		callData();
	})
	return (
		<Row className="my-3">
			<Col md={2}>
				<LeftSidebar className="shadow-sm p-2 text-white" bg="dark">
					card 1
				</LeftSidebar>
			</Col>
			<Col md={6}>
				<MainContent className="shadow-sm p-2 text-white" bg="dark">
					<NewsCard data={data} />
				</MainContent>
			</Col>
			<Col md={4}>
				<RightSidebar className="shadow-sm p-2 text-white" bg="dark">
					card 3
				</RightSidebar>
			</Col>
		</Row>
	);
};

const LeftSidebar = styled(Card)`
	position: sticky;
	top: 0;
`;

const MainContent = styled(Card)``;

const RightSidebar = styled(Card)`
	position: sticky;
	top: 0;
`;




