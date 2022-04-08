import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { CardProps } from '../Card';
import { TabContainer } from './styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Tab: FC<TabProps> = (props) => null;

export const Tabs: FC<TabsProps> = ({ defaultId, children, ...rest }) => {
	const router = useRouter();
	const [activeID, setActiveID] = useState<number | string>();
	useEffect(() => {
		if (defaultId) setActiveID(defaultId);
	}, [defaultId]);

	let childItems = [];
	if (children && Array.isArray(children)) {
		childItems = children;
	} else if (children && Object.keys(children).length > 0) {
		childItems.push(children);
	}

	if (childItems && childItems.length > 0) {
		return (
			<TabContainer {...rest}>
				<ul className="Tab-Header">
					{childItems?.map(({ props }, i) => {
						return (
							<li
								key={i}
								className={`Tab-Header__Single${
									i === activeID || router?.pathname === props?.activeSlug ? ' isActive' : ''
								}`}
							>
								<button
									onClick={() => {
										setActiveID(i);
										if (props?.onClick) {
											props?.onClick();
										}
									}}
								>
									{props?.title}
								</button>
							</li>
						);
					})}
				</ul>
				<div className="Tab-Content">
					{childItems?.map(({ props: { children: child, activeSlug } }, i) => (
						<div
							key={i}
							className={`Tab-Content__Single${
								i === activeID || router?.pathname === activeSlug ? ' isActive' : ''
							}`}
						>
							{child}
						</div>
					))}
				</div>
			</TabContainer>
		);
	}

	return null;
};

export interface TabsProps extends CardProps {
	defaultId?: number | string;
}

export interface TabProps {
	title: string;
	onClick?: () => void;
	activeSlug?: string;
}
