import React, { FC } from 'react';

export const ProdDetailPrice: FC<PropsType> = ({ regularPrice, discountPrice }) => {
	if (discountPrice) {
		return (
			<div className="mb-4">
				<h5 className="text-secondary">
					BDT. <s>&#x09F3; {regularPrice}</s>
				</h5>
				<h3>
					Offer Price:&#x09F3;
					{discountPrice}
				</h3>
			</div>
		);
	} else {
		return (
			<h3 className="mb-4">
				BDT. &#x09F3;
				{regularPrice}
			</h3>
		);
	}
};

interface PropsType {
	regularPrice: number;
	discountPrice?: number;
}
