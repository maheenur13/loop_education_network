/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, LinkProps } from '@components/atoms';
import Icon, { IconProps } from '@libs/icons';
import { FC, MutableRefObject } from 'react';
import styled from 'styled-components';

export const NavItemWithIcon: FC<PropsType> = ({ path, width, title, href, ...rest }) => {
	return (
		<Wrapper href={href} {...rest}>
			<div>
				<Icon path={path} width={width} fill="var(--bs-light)" />
			</div>
			<div>
				<Title>{title}</Title>
			</div>
		</Wrapper>
	);
};

interface PropsType extends LinkProps, Pick<IconProps, 'path' | 'width' | 'height' | 'fill'> {
	title: string;
	ref?: MutableRefObject<any>;
}

const Title = styled.p`
	margin-bottom: 0;
	color: var(--bs-light);
	font-size: 0.75rem;
`;

const Wrapper = styled(Link)`
	margin: 0 1rem 0 0;
	display: flex;
	text-align: center;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: var(--bs-primary);
	text-decoration: none;

	/* border: 1px solid; */
`;

// interface PropsType extends LinkProps {

//     title: string;
//     subtitle?: string;
//     ref?: MutableRefObject<any>;
// }
