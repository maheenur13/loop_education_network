import { FC, HTMLAttributes } from 'react';
import { ElementBorders } from '../interfaces';
import { CardBody, CardFooter, CardHeader, Wrapper } from './styles';

export const Card: FC<CardProps> = ({ children, ...rest }) => <Wrapper {...rest}>{children}</Wrapper>;

export interface CardProps extends Pick<ElementBorders, 'pill'>, HTMLAttributes<HTMLElement> {
	shadow?: boolean;
}

Card.defaultProps = {
	shadow: false,
};

export { CardHeader, CardBody, CardFooter };
