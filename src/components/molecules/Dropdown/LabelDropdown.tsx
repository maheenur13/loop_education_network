import { ButtonProps, Dropdown, DropdownProps } from '@components/atoms';
import Icon, { IconProps } from '@libs/icons';
import { FC } from 'react';
import styled from 'styled-components';

export const LabelDropdown: FC<LabelDropdownProps> = (props) => {
	const { label, smallLabel, isCount, count, path, width, height, fill, children, ...rest } = props;
	const iconProps = { path, width, height, fill };

	return (
		<Dropdown
			buttonLabel={
				<div className="d-flex flex-column align-items-center justify-content-center">
					<Icon {...iconProps} height={24} />
					<ButtonLabel>
						{smallLabel && <small className="d-block">{smallLabel}</small>}
						<p className="Label" title={label}>
							{label} {isCount && <Count>{count}</Count>}
						</p>
					</ButtonLabel>
				</div>
			}
			{...rest}
		>
			{children}
		</Dropdown>
	);
};

export interface LabelDropdownProps
	extends Omit<DropdownProps, 'buttonLabel'>,
		Pick<IconProps, 'path' | 'width' | 'height' | 'fill'>,
		ButtonProps {
	label: string;
	smallLabel?: string;
	isCount?: boolean;
	count?: number;
}

LabelDropdown.defaultProps = {
	variant: 'link',
	fill: 'var(--bs-dark)',
	isCount: false,
	count: 0,
};

const ButtonLabel = styled.div`
	color: var(--bs-dark);
	text-align: left;
	line-height: 1.3;
	margin: 0 0 0 0.1rem;
	font-family: 'Segoe UI';

	small {
		font-family: 'Segoe UI';
	}
	.Label {
		margin-bottom: 0;
		max-width: 4.125rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

const Count = styled.span`
	width: 1rem;
	height: 1rem;
	font-size: 0.625rem;
	display: inline-block;
	text-align: center;
	line-height: 1.5;
	border-radius: 50rem;
	color: var(--bs-white);
	background-color: var(--bs-primary);
`;
