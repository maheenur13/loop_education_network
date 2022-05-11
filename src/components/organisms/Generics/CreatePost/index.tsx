import { FC, Fragment, useState } from 'react';
import styled from 'styled-components';
import { PostOptions } from './PostOptions';

export const CreatePost: FC = () => {
	const [showOptions, setShowOptions] = useState(false);

	const handleInputClick = () => {
		setShowOptions(true);
	};
	return (
		<Fragment>
			<Wrapper className="bg-dark">
				<a href="/" className="avatar_section">
					<img src="https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1024" />
				</a>
				<button className="post_btn" onClick={handleInputClick}>
					Start a post
				</button>
			</Wrapper>

			<PostOptions show={showOptions} onHide={() => setShowOptions(false)} />
		</Fragment>
	);
};

const Wrapper = styled.div`
	border: 1px solid var(--bs-secondary);
	border-radius: 1rem;
	display: flex;
	align-items: center;
	padding: 1.5rem 1rem;

	.avatar_section {
		margin-right: 0.5rem;

		& > img {
			border-radius: 50rem;
			background-color: red;
			object-fit: cover;
			width: 3rem;
			height: 3rem;
		}
	}
	.post_btn {
		display: block;
		width: 100%;
		box-shadow: none;
		background-color: var(--bs-white);
		border: 1px solid var(--bs-secondary);
		border-radius: 1rem;
		padding: 0.5rem 1rem;
		text-align: left;

		&:hover {
			cursor: pointer;
			color: var(--bs-white);
			background-color: var(--bs-gray-600);
		}
	}
`;
