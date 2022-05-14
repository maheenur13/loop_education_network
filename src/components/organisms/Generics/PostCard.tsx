/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISinglePost } from '@store/actions';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Card } from 'react-bootstrap';

export const PostCard: FC<ISinglePost> = (props) => {
	const { id, title, description, image } = props;
	const router = useRouter();

	return (
		<Card bg="dark" style={{ width: '100%', margin: '16px 0' }}>
			<Card.Img variant="top" src={image} height={200} style={{ objectFit: 'cover' }} />
			<Card.Body>
				<Card.Title className="text-primary">{title}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Link href={`${router.pathname}/${id}`}>View Details</Link>
			</Card.Body>
		</Card>
	);
};
