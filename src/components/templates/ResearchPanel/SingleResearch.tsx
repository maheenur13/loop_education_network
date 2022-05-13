import { ResearchDetails } from '@components/organisms';
import { getResearchState, ISinglePost } from '@store/actions';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const SingleResearch = () => {
	const [data, setData] = useState<ISinglePost>(null);
	const { researchData } = useSelector(getResearchState);
	const router = useRouter();

	useEffect(() => {
		const arr = [...researchData];
		const obj = arr.find((el) => el.id === router?.query?.uid);
		if (obj) setData(obj);
	}, [researchData, router?.query?.uid]);

	console.log({ data });

	return (
		<Row className="justify-content-center my-3">
			<Col md={8}>{data ? <ResearchDetails data={data} /> : <p className="text-center">No data found!</p>}</Col>
		</Row>
	);
};
