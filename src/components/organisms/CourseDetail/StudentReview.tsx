import Icon, { star } from '@libs/icons';
import { courseDetailData, studentsReviewsData } from '@utils/constants';
import React, { FC } from 'react';
import styled from 'styled-components';
import { Review } from './Review';

export const StudentReview: FC<PropsType> = ({ ratings, reviews }) => {
	return (
		<div className="row product-review">
			<div className="col-sm-3 pl-4 border-right">
				<h5>Ratings and Reviews</h5>
				<h4 className="green-clr">
					4.5 <Icon path={star} fill="#ff8100" height={20} width={20} />
				</h4>
				<h6 className="ash-clr">55 Ratings 18 Reviews</h6>
				{ratings.map((d, i) => (
					<div className=" d-flex align-items-center " key={i}>
						<b>{d.ratingOf}</b>
						<Icon path={star} className="ms-2" height={18} width={18} />
						<ProgressBarWrapper>
							<div
								className={`progress-bar ${d.ratingOf > 2 && 'green-bg'}
                                    ${d.ratingOf === 2 && 'orange-bg'}
                                    ${d.ratingOf === 1 && 'red-bg'}`}
								style={{ width: `${d.total * 2}%` }}
								role="progressbar"
								aria-valuenow={d.total}
								aria-valuemin={0}
								aria-valuemax={100}
							/>
						</ProgressBarWrapper>
						<strong className="ash-clr">{d.total}</strong>
					</div>
				))}
				<hr className="hide-for-mobile" />
				<button className="write-review-btn active px-4 py-2 mx-auto d-block mt-4">Write a Review</button>
			</div>
			<div className="col-sm-9">
				{reviews.map((d, i) => (
					<Review data={d} key={i} />
				))}
			</div>
		</div>
	);
};

interface PropsType {
	ratings: typeof courseDetailData[0]['courseDetail']['rating_n_review']['ratings'];
	reviews: typeof studentsReviewsData;
}

const ProgressBarWrapper = styled.div`
	width: 9rem;
	margin: 0 0.5rem;
	height: 0.3rem;
	background-color: var(--border);

	.green-bg {
		height: 0.3rem;
		background-color: #00ad4c;
	}
	.red-bg {
		height: 0.3rem;
		background-color: #ed1c24;
	}
	.orange-bg {
		height: 0.3rem;
		background-color: #ff8100;
	}
`;
