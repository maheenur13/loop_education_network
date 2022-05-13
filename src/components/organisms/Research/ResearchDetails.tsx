import { Image } from '@components/atoms';
import { ISinglePost } from '@store/actions';
import dateFormat from 'dateformat';
import React, { FC } from 'react';
import styled from 'styled-components';

export const ResearchDetails: FC<PropsType> = ({ data }) => {
	const { createdAt, image, description, pdf, supervisorInstitute, supervisorName, team, supervisorSubject, title } =
		data;

	console.log({ team });

	return (
		<Wrapper>
			<Topper>
				<Image
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bill_Gates_2017_%28cropped%29.jpg/220px-Bill_Gates_2017_%28cropped%29.jpg"
					alt=""
				/>
				<div>
					<p>Bill Gates</p>
					<span>{dateFormat(createdAt, 'mmm d, yyyy')}</span>
				</div>
			</Topper>

			<div className="text-center">
				<Image fluid style={{ objectFit: 'cover' }} src={image} alt="" />
			</div>
			<h1 className="fw-bold">{title}</h1>
			<p>{description}</p>
			<iframe src={pdf} width="100%" height="500px"></iframe>
			<p className="mt-3">Team Members:</p>
			<ul>
				{team?.map(({ name, educationInstitute }, i) => (
					<li key={i}>
						<p className="mb-1">Name: {name}</p>
						<p>Institute: {educationInstitute}</p>
					</li>
				))}
			</ul>

			<hr />

			<p>Supervisor Details:</p>
			<p className="mb-1">Name: {supervisorName}</p>
			<p className="mb-1">Subject: {supervisorSubject}</p>
			<p className="mb-1">Institute: {supervisorInstitute}</p>
		</Wrapper>
	);
};

interface PropsType {
	data: ISinglePost;
}

const Wrapper = styled.div``;

const Topper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1rem;

	img {
		border-radius: 50%;
		width: 50px;
		height: 50px;
		object-fit: cover;
		margin-right: 0.875rem;
	}
	p {
		margin-bottom: 0.15rem;
		font-size: 1rem;
	}
	span {
		color: var(--bs-gray-500);
	}
`;
