/* eslint-disable @typescript-eslint/no-unused-vars */
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { FC, HTMLAttributes } from 'react';
import { Variant } from '../interfaces';
import { Wrapper } from './styles';

export const Link: FC<LinkProps> = (props) => {
	const router = useRouter();
	const { href, replace, scroll, shallow, prefetch, locale, children, isActive, className, ...rest } = props;
	const nextLinkProps = { href, replace, scroll, shallow, prefetch, locale };

	return (
		<NextLink passHref {...nextLinkProps}>
			<Wrapper className={router.pathname === href ? `${className} active` : className} {...rest}>
				{children}
			</Wrapper>
		</NextLink>
	);
};

export interface LinkProps extends Omit<NextLinkProps, 'passHref' | 'as'>, HTMLAttributes<HTMLElement> {
	isActive?: boolean;
	variant?: Extract<Variant, 'primary' | 'dark' | 'light'>;
	target?: string;
}

Link.defaultProps = {
	isActive: false,
	variant: 'primary',
	className: '',
};
