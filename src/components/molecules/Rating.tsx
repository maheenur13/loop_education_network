import Icon, { star } from '@libs/icons';
import React, { FC } from 'react';
import styled from 'styled-components';

export const Rating: FC<PropsType> = ({ rating, className, fontSize = 18, fill = 'var(--bs-warning)' }) => {
	return (
		<Wrapper className={className} fontSize={fontSize}>
			<Icon className="me-1" path={star} height={fontSize} width={fontSize} fill={fill} />
			{rating}
		</Wrapper>
	);
};

interface PropsType {
	rating: number;
	fontSize?: number;
	fill?: string;
	className?: string;
}

const Wrapper = styled.span<{ fontSize: number }>`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${({ fontSize }) => fontSize}px;
`;
