import { INewsType } from '@libs/api/interfaces/news';
import Link from 'next/link';
import { FC } from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const NewsCard: FC<INewsType> = ({ data }) => {
	console.log(data);
	return (
		<Wrapper>
			{[...Array(10)]?.map((el, idx) => {
				return (
					<Card key={idx} bg="dark" style={{ width: '100%' }}>
						<Card.Img variant="top" src="/images/tesla_logo.png" height={200} />
						<Card.Body>
							<Card.Title className="text-primary">
								Tesla’s mission is to accelerate the world’s transition to sustainable energy.
							</Card.Title>
							<Card.Text>
								Tesla was founded in 2003 by a group of engineers who wanted to prove that people didn’t
								need to compromise to drive electric – that electric vehicles can be better, quicker and
								more fun to drive than gasoline cars. Today, Tesla builds not only all-electric vehicles
								but also infinitely scalable clean energy generation and storage products. Tesla
								believes the faster the world stops relying on fossil fuels and moves towards a
								zero-emission future, the better.
							</Card.Text>
							<Link href="#">View Details</Link>
						</Card.Body>
					</Card>
				);
			})}
		</Wrapper>
	);
};

const Wrapper = styled.div``;
