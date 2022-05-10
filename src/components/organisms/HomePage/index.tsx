/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { NewsCard } from '../Generics';

export const HomePage: FC<any> = ({ data }) => {
	// console.log(data);
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
