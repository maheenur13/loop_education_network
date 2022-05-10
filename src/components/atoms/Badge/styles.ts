/* eslint-disable indent */
import styled, { css } from 'styled-components';
import { BadgeProps } from '.';
import { getThemeColor } from './../utils';

export const BadgeWrapper = styled.span<BadgeProps>`
	display: inline-block;
	padding: 0.219rem 1rem;

	${({ variant }) => {
		if (variant !== 'light') {
			return css`
				color: var(--bs-light);
				background-color: ${getThemeColor(variant)};
			`;
		} else {
			return css`
				background-color: ${getThemeColor(variant)};
			`;
		}
	}}
	${({ rounded, pill }) => {
		if (rounded) {
			return css`
				border-radius: 0.25rem;
			`;
		} else if (pill) {
			return css`
				border-radius: 50rem;
			`;
		}
	}}
`;
