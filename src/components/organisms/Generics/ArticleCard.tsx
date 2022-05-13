/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from '@components/atoms';
import { FC } from 'react';
import { Card } from 'react-bootstrap';

export const ArticleCard: FC<any> = ({ data }) => {
	// const { } = props;
	// console.log('mahee', data);

	return (
		<Card bg="dark" style={{ width: '100%', margin: '16px 0' }}>
			<Card.Img variant="top" src="/images/tesla_logo.png" height={200} />
			<Card.Body>
				<Card.Title className="text-primary">{data?.title}</Card.Title>
				<Card.Text>{data?.shortDescription}</Card.Text>
				<Link href="#">View Details</Link>
			</Card.Body>
		</Card>
	);
};
