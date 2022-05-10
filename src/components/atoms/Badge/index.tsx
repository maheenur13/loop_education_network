import { FC, HTMLAttributes } from 'react';
import { BadgeVariant, ElementBorders } from '../interfaces';
import { BadgeWrapper } from './styles';

export const Badge: FC<BadgeProps> = ({ children, ...rest }) => <BadgeWrapper {...rest}>{children}</BadgeWrapper>;

export interface BadgeProps extends ElementBorders, HTMLAttributes<HTMLElement> {
	variant?: BadgeVariant;
}

Badge.defaultProps = {
	variant: 'primary',
	rounded: false,
	pill: false,
};

export { BadgeWrapper };
