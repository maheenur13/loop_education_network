import { formatStatus } from '@utils/helpers';
import { Dispatch, FC, HTMLAttributes, SetStateAction } from 'react';
import styled from 'styled-components';

export const TabsWithButton: FC<PropsType> = ({ tabs, active, setActive, ...rest }) => {
	if (tabs?.length) {
		return (
			<List {...rest}>
				{tabs.map((tab, i) => (
					<li key={i} className={active === tab ? 'active' : ''} style={{ fontWeight: 600 }}>
						<button
							type="button"
							onClick={() => {
								if (setActive) setActive(tab);
							}}
						>
							{formatStatus(tab)}
						</button>
					</li>
				))}
			</List>
		);
	}
};

interface PropsType extends HTMLAttributes<HTMLUListElement> {
	tabs: string[];
	active: string;
	setActive?: Dispatch<SetStateAction<string>>;
}

const List = styled.ul`
	width: 100%;
	margin: 0 0 0.885rem 0;
	padding: 0.5rem 0;
	display: flex;
	flex-wrap: wrap;
	border-bottom: 1px solid #e9e9e9;

	li {
		text-align: center;
		list-style: none;
		display: inline-block;
		margin-right: 1rem;
		/* padding-bottom: 0.5rem; */

		button {
			border: none;
			box-shadow: none;
			background-color: transparent;
			font-weight: 600 !important;
			/* border-radius: 50rem; */
			padding: 0.938rem 0.625rem 0.903rem 0.625rem;

			&:focus {
				outline: none;
			}
			&:hover {
				color: var(--bs-primary);
			}
		}

		&.active {
			position: relative;
			&:after {
				content: '';
				bottom: -0.5rem;
				width: 100%;
				height: 0.35rem;
				display: block;
				position: absolute;
				background-color: var(--bs-primary);
				border-top-left-radius: 0.625rem;
				border-top-right-radius: 0.625rem;
			}

			& > button {
				color: var(--bs-primary);
			}
		}
	}
`;
