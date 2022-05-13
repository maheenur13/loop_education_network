/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import styled from 'styled-components';
import { ArticleCard } from './ArticleCard';
import { VideoCard } from './VideoCard';

export const NewsCard: FC<any> = ({ data }) => {
	// console.log(data);
	return (
		<Wrapper>
			{data?.map((el, idx) => {
				if (el?.articleType === 'article') return <ArticleCard data={el} key={idx} />
				if (el?.articleType === 'video') return <VideoCard data={el} key={idx} />
				// if (el?.postType === 'photo') return <PhotoCard data={el} key={idx} />
			})}
		</Wrapper>
	);
};

const Wrapper = styled.div``;
