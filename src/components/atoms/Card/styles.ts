import styled, { css } from 'styled-components';
import { CardProps } from '.';

export const CardHeader = styled.div`
	display: block;
	padding: 0.625rem 1rem;
	border-bottom: 1px solid var(--border);
`;

export const CardFooter = styled.div`
	display: block;
	padding: 1rem;
	bottom: 0;
	width: 100%;
	border-top: 1px solid var(--border);
`;

export const CardBody = styled.div`
	display: block;
	padding: 0.625rem 1rem;

	& + & {
		border-top: 1px solid var(--border);
	}
`;

export const Wrapper = styled.div<CardProps>`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 0;
	background-color: var(--bs-white);
	border: 1px solid var(--border);
	border-radius: ${({ pill }) => (pill ? '50rem' : '1.25rem')};

	${({ shadow }) => {
		if (shadow) {
			return css`
				box-shadow: 0 0 0.375rem rgba(138, 138, 138, 0.1);
			`;
		}
	}}

	${CardHeader} {
		border-top-left-radius: ${({ pill }) => (pill ? '50rem' : '1.25rem')};
		border-top-right-radius: ${({ pill }) => (pill ? '50rem' : '1.25rem')};
	}
`;
