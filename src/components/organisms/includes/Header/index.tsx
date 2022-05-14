import { NavItemWithIcon, NavModalButton } from '@components/organisms/Generics';
import { books, Home, project, settingQ, userBold, userSearch } from '@libs/icons';
import { getUserState } from '@store/actions';
import { FC, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import LogRegModal from './LogRegModal';
import UserModal from './UserModal';

export const Header: FC = () => {
	const [show, setShow] = useState<boolean>(false);
	const handleModalOpen = () => {
		console.log('open');
		setShow(true);
	};
	const {
		isAuthenticate
	} = useSelector(getUserState);

	return (
		<HeaderWrapper>
			<Container>
				<Row className="align-items-center w-100 mx-auto">
					<Col md={4}>
						<Title>Loop Education Network</Title>
					</Col>
					<Col ms={8} className="d-flex justify-content-end">
						<NavItemWithIcon href="/" path={Home} width={22} title="HOME" />
						<NavItemWithIcon href="/courses" path={books} width={22} title="FIND COURSE" />
						<NavItemWithIcon href="/research-panel" path={userSearch} width={22} title="RESEARCH" />
						<NavItemWithIcon href="/projects-panel" path={project} width={22} title="PROJECT" />
						<NavItemWithIcon href="/career" path={userBold} width={22} title="CAREER" />
						<NavItemWithIcon href="https://loop-tube.com" path={settingQ} width={22} title="LOOP CREATOR" />
						{!isAuthenticate ? <NavModalButton title="SIGN IN" handleModalOpen={handleModalOpen} /> : <UserModal />}
						<LogRegModal show={show} setShow={setShow} /> :
						{/* <LabelDropdown
							alignRight
							path={user}
							fill="#ffffff"
							className="ps-0 LabelDropdown"
							label="SIGN IN"
						>
							<DropdownUser />
						</LabelDropdown> */}
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
