import { CreatePost, PostCard } from '@components/organisms';
import { getProjectState } from '@store/actions';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const ProjectPanel: FC = () => {
	const { projectData } = useSelector(getProjectState);

	return (
		<Row className="justify-content-center my-3">
			<Col md={6}>
				<CreatePost postType="PROJECT" />

				{projectData && projectData?.length > 0 ? (
					projectData.map((el, i) => <PostCard key={i} {...el} />)
				) : (
					<p className="mt-3 text-center">No posts available</p>
				)}
			</Col>
		</Row>
	);
};
