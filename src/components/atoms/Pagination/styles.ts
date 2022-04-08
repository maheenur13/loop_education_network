import styled from 'styled-components';

export const Wrapper = styled.div`
	margin-top: 1.5rem;
	display: flex;
	align-items: center;
`;

export const PageCount = styled.span`
	font-weight: 500;
	margin-left: auto;
	@media (max-width: 425px) {
		display: none;
	}
`;

export const PagiItems = styled.ul`
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;

	li {
		list-style: none;
		display: flex;
		margin: 0 2px;
	}
`;

export const PagiItemDots = styled.span`
	width: 2.125rem;
	height: 2.125rem;
	line-height: 2.125rem;
	text-align: center;
`;

export const PagiItem = styled.button`
	width: 2.125rem;
	height: 2.125rem;
	text-align: center;
	border-radius: 100%;
	color: #707070;
	padding: 0;
	border: 0;
	background-color: transparent;

	&:hover {
		background-color: #e9ecef;
	}

	&.active {
		color: var(--bs-white);
		background-color: #2b2b2b;
	}

	&:disabled {
		&:hover {
			background-color: transparent;
		}
	}

	&.optional {
		width: auto;
		height: 2.125rem;
		color: #2b2b2b;

		&:hover {
			background-color: transparent;
		}
	}

	@media (max-width: 425px) {
		width: 1.7rem;
		height: 1.7rem;
		line-height: 1.7rem;
		text-align: center;
	}
`;
