import { Rating } from '@components/molecules';
import React from 'react';

export const Prod_Title_Code_Review = ({ title, review, tag, rating }) => {
	return (
		<div className="mb-4">
			<h4 className="d-flex">
				{title} <Rating className="ms-auto" rating={rating} fontSize={22} />
			</h4>
			<p className="d-flex ">
				{tag}
				<span className="ms-auto">{review} Review</span>
			</p>
		</div>
	);
};
