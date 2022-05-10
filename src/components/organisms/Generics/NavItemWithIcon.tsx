/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, LinkProps } from '@components/atoms';
import Icon, { IconProps } from '@libs/icons';
import { useRouter } from 'next/router';
import { FC, MutableRefObject } from 'react';
import styled from 'styled-components';

export const NavItemWithIcon: FC<PropsType> = ({ path, width, title, href, ...rest }) => {
    const { pathname } = useRouter();
    // console.log(pathname);
    // if (pathname === '/') href = '/newsfeed'

    return (
        <Wrapper href={href} {...rest}>
            <div className={pathname === href ? 'active' : ''}>
                <div>
                    <Icon path={path} width={width} fill={pathname === href ? 'var(--bs-primary)' : 'var(--bs-light)'} />
                </div>
                <div>
                    <Title className='Title'>{title}</Title>
                </div>
            </div>
        </Wrapper>
    );
};

interface PropsType extends LinkProps, Pick<IconProps, 'path' | 'width' | 'height' | 'fill'> {
    title: string;
    ref?: MutableRefObject<any>;
}

const Title = styled.p`
	margin-bottom: 0;
	color: var(--bs-light);
	font-size: 0.75rem;
`;

const Wrapper = styled(Link)`
	margin: 0 1rem 0 0;
	display: flex;
	text-align: center;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: var(--bs-primary);
	text-decoration: none;
    .active {
        border-bottom: 2px solid var(--bs-primary);
        .Title {
            color: var(--bs-primary);
        }
    }

	/* border: 1px solid; */
`;

// interface PropsType extends LinkProps {

//     title: string;
//     subtitle?: string;
//     ref?: MutableRefObject<any>;
// }
