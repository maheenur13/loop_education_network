import styled, { css } from 'styled-components';
import { LinkProps } from '.';

export const Wrapper = styled.a<Pick<LinkProps, 'variant'>>`
	display: inline-block;
	&.active {
		color: var(--bs-primary);
	}
	${({ variant }) => {
		if (variant === 'dark') {
			return css`
				color: var(--bs-dark);

				&:hover {
					color: var(--bs-dark);
				}
			`;
		} else if (variant === 'light') {
			return css`
				color: var(--bs-white);

				&:hover {
					color: var(--bs-light);
				}
			`;
		}
	}}
`;
