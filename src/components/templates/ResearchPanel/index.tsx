import { CreatePost, PostCard } from '@components/organisms';
import { getResearchState } from '@store/actions';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { SingleResearch } from './SingleResearch';

export const ResearchPanel: FC = () => {
	const { researchData } = useSelector(getResearchState);

	return (
		<Row className="justify-content-center my-3">
			<Col md={6}>
				<CreatePost postType="RESEARCH" />

				{researchData && researchData?.length > 0 ? (
					researchData.map((el, i) => <PostCard key={i} {...el} />)
				) : (
					<p className="mt-3 text-center">No posts available</p>
				)}
			</Col>
		</Row>
	);
};

export { SingleResearch };
