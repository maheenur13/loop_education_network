/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonHTMLAttributes, FC } from 'react';
import { ButtonVariant, ElementBorders, ElementSize } from '../interfaces';
import { Wrapper } from './styles';

export const Button: FC<ButtonProps> = ({ children, ...rest }) => <Wrapper {...rest}>{children}</Wrapper>;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, Pick<ElementBorders, 'pill'> {
	variant?: ButtonVariant;
	block?: boolean;
	outline?: boolean;
	size?: ElementSize;
}

Button.defaultProps = {
	variant: 'primary',
	pill: false,
	block: false,
	outline: false,
};
