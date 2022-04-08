import { Image as Img, ImageProps } from '@components/atoms';
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { UrlObject } from 'url';

export const Brand: FC<BrandProps> = ({ isClickable, href, ...rest }) => {
	if (isClickable) {
		return (
			<Link href={href} passHref>
				<a>
					<Image {...rest} />
				</a>
			</Link>
		);
	}

	return <Image {...rest} />;
};

export interface BrandProps extends Omit<ImageProps, 'fluid'> {
	isClickable?: boolean;
	href?: string | UrlObject;
}

Brand.defaultProps = {
	href: '/',
	src: '/logo.png',
	alt: 'brand',
	isClickable: false,
};

export const Image = styled(Img)`
	display: inline-block;
	margin: 0 auto;
	height: 2.938rem;
	width: 7.188rem;
`;
