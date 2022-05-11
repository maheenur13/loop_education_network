import { CreatePost } from '@components/organisms';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';

export const ResearchPanel: FC = () => {
	return (
		<Row className="justify-content-center my-3">
			<Col md={6}>
				<CreatePost />
			</Col>
		</Row>
	);
};
