import { CreatePost, PostCard } from '@components/organisms';
import { getResearchState } from '@store/actions';
import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const ResearchPanel: FC = () => {
	const [data, setData] = useState([]);
	const { researchData } = useSelector(getResearchState);

	useEffect(() => {
		const arr = [...researchData];
		setData(arr.reverse());
	}, [researchData]);

	return (
		<Row className="justify-content-center my-3">
			<Col md={6}>
				<CreatePost postType="RESEARCH" />

				{data && data?.length > 0 ? (
					data.map((el, i) => <PostCard key={i} {...el} />)
				) : (
					<p className="mt-3 text-center">No posts available</p>
				)}
			</Col>
		</Row>
	);
};
