import { Button } from "@components/atoms";
import { FC } from "react";
import styled from "styled-components";

export const NavModalButton: FC<PropsType> = ({ title, handleModalOpen }) => {
    return (
        <ButtonWrapper onClick={handleModalOpen}>
            <Title className='Title'>{title}</Title>
        </ButtonWrapper>
    );
};

const ButtonWrapper = styled(Button)`
    padding: 0.625rem ;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
`;
const Title = styled.p`
	margin-bottom: 0;
	color: var(--bs-dark);
	font-size: 0.75rem;
    font-weight: 650;
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);  
    display: inline-block;
`;

type PropsType = {
    title: string;
    handleModalOpen: () => void;
}
