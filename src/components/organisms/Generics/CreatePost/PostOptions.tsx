import { FC } from 'react';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';

export const PostOptions: FC<PropsType> = ({ show, onHide }) => {
	return (
		<Wrapper show={show} onHide={onHide} size="lg">
			<Modal.Header closeButton>
				<h5 className="mb-0">Create a post</h5>
			</Modal.Header>
			<Modal.Body>PostOptions Coming soon...</Modal.Body>
		</Wrapper>
	);
};

interface PropsType {
	show?: boolean;
	onHide?: () => void;
}

const Wrapper = styled(Modal)`
	.modal-content {
		border-radius: 0.875rem;

		.modal-header {
			padding: 0.75rem 1rem;
		}
	}
`;
