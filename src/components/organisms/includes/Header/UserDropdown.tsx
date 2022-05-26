
import { Image, Link } from "@components/atoms";
import { revokeAuthUser } from "@store/user/user.actions";
import { useRouter } from "next/router";

import { FC } from "react";
import { Dropdown } from "react-bootstrap";
import styled from "styled-components";

const UserDropdown: FC = () => {
    const router = useRouter();
    return (
        <Wrapper>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <Image src='/images/avatar.jpg' width={40} height={40} alt='ProfilePicture' roundedCircle />
                </Dropdown.Toggle>

                <Dropdown.Menu className="d-flex flex-column">
                    <Dropdown.Item>
                        <LinkWrapper href="/my-profile">My Profile</LinkWrapper>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <LinkWrapper href="/settings">settings</LinkWrapper>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <LinkWrapper href='#' onClick={async () => {
                            await revokeAuthUser();
                            router.push('/');
                        }} >Logout</LinkWrapper>
                    </Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
        </Wrapper>
    );
};

export default UserDropdown;

const Wrapper = styled.div`
    .dropdown {
        button { 
            background: none;
            border: none;
            &:focus {
                box-shadow:none;
            }
           
        }
    }
    .show > .btn-success.dropdown-toggle ,.btn-success.active:focus {
        color: #fff;
    background: none;
    border-color: none;
    box-shadow:none;
    }

`;

const LinkWrapper = styled(Link)`
    padding:0.625rem;
    /* border: 1px solid; */
    margin-bottom: 0.225rem;
    color: var(--bs-dark);
    &:hover {
        color: var(--bs-dark);
        /* background: #00000027; */
    }
`;