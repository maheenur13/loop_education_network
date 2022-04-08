import { Header } from '@components/organisms/includes';
import { FC } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const MainLayout: FC = ({ children }) => {
	return (
		<Wrapper>
			<Header />
			<main className="MainComponent">
				<Container className="w-100 mx-auto text-light">{children}</Container>
			</main>
			{/* <Footer /> */}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	.MainComponent {
		height: calc(100vh - 88px);
		overflow-y: auto;
		overflow-x: hidden;
		width: 100%;
		/* overflow-y: auto; */
	}
	/* width: 100%; */
	/* margin: 0 auto; */
`;
