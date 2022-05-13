import Icon, { star } from '@libs/icons';
import { studentsReviewsData } from '@utils/constants';
import React, { FC } from 'react';
import styled from 'styled-components';

export const Review: FC<PropsType> = ({ data }) => {
	const { title, detail, stduentName, place, date, rating } = data;

	return (
		<div>
			<hr />
			<p>
				<strong className=" me-1">{title}</strong>
				{[1, 2, 3, 4, 5].map((d, i) => (
					<StarIconWrapper key={i}>
						<Icon
							height={18}
							width={18}
							path={star}
							className={
								rating <= i
									? 'star-clr star'
									: `star ${rating > 2 && 'green-clr'} 
                                ${rating === 2 && 'orange-clr'} 
                                ${rating < 2 && 'red-clr'}`
							}
						/>
					</StarIconWrapper>
				))}
			</p>
			<p>{detail}</p>
			<p>
				<small className="ash-clr">
					{stduentName}, {place} - {date}
				</small>
			</p>
		</div>
	);
};

interface PropsType {
	data: typeof studentsReviewsData[0];
}

const StarIconWrapper = styled.span`
	.star-clr {
		fill: #d8d8d8;
	}
	.green-clr {
		fill: #00c26c;
	}
	.red-clr {
		fill: #ed1c24;
	}
	.orange-clr {
		fill: #ff8100;
	}
`;
