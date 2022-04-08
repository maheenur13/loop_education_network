import { LabelDropdown } from '@components/molecules';
import { NavItemWithIcon } from '@components/organisms/Generics';
import { books, Home, project, settingQ, user, userBold, userSearch } from '@libs/icons';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import DropdownUser from './DropdownUser';

export const Header: FC = () => {
	return (
		<HeaderWrapper>
			<Container>
				<Row className="align-items-center w-100 mx-auto">
					<Col md={4}>
						<Title>Loop Education Network</Title>
					</Col>
					<Col ms={8} className="d-flex justify-content-end">
						<NavItemWithIcon href="/newsfeed" path={Home} width={22} title="HOME" />
						<NavItemWithIcon href="" path={books} width={22} title="FIND COURSE" />
						<NavItemWithIcon href="" path={userSearch} width={22} title="RESEARCH" />
						<NavItemWithIcon href="" path={project} width={22} title="PROJECT" />
						<NavItemWithIcon href="" path={userBold} width={22} title="CAREER" />
						<NavItemWithIcon href="" path={settingQ} width={22} title="LOOP CREATOR" />
						<LabelDropdown
							alignRight
							path={user}
							fill="#ffffff"
							className="ps-0 LabelDropdown"
							label="SIGN IN"
						>
							<DropdownUser />
						</LabelDropdown>
					</Col>
				</Row>
			</Container>
		</HeaderWrapper>
	);
};

const Title = styled.h4`
	color: var(--bs-primary);
	margin-bottom: 0;
	padding-bottom: 0;
`;

const HeaderWrapper = styled.header`
	background-color: var(--bs-dark);
	color: var(--bs-light);
	padding: 0.825rem 0;

	.LabelDropdown {
		.Label {
			color: #ffffff;
			font-size: 0.75rem;
			font-weight: 500;
		}
	}
`;
