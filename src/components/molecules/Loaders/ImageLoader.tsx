import { FC } from 'react';
import styled from 'styled-components';

export const ImageLoader: FC<PropsType> = ({ isLoading }) => {
	if (isLoading) {
		return (
			<Loader>
				<LoaderCover />
				<LoaderWarp />
			</Loader>
		);
	}

	return null;
};

interface PropsType {
	isLoading: boolean;
}

const Loader = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
`;

const LoaderCover = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 1;
	background: var(--bs-white);
	opacity: 0.4;
`;

const LoaderWarp = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 1;
	background: 50% 50% no-repeat;
	background-image: url('/images/loader.gif');
`;
