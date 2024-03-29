import { IconButton } from "@components/molecules";
import { google } from "@libs/icons";
import { authPopup, getUserState } from "@store/actions";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { Modal, Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ForgotPass from "./ForgotPass";
import LoginForm from "./LoginForm";
import Registration from "./Registration";

const LogRegModal: FC<PropsType> = ({ show, setShow }) => {
    const [key, setKey] = useState<string>('login');
    const handleClose = () => {
        setShow(false)
    }
    const dispatch = useDispatch();
    const {
        isAuthenticate
    } = useSelector(getUserState);

    return (
        <Wrapper
            size="md"
            show={show && !isAuthenticate}
            onHide={() => {
                () => dispatch(authPopup({ isActive: false, type: null }))
                handleClose();

            }}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title className="text-center w-100">{key === 'login' ? 'LOGIN TO YOUR ACCOUNT' : key === 'registration' ? 'CREATE YOUR ACCOUNT' : 'Change Your Password'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    key === 'forgot-pass' ? <ForgotPass setKey={setKey} /> :
                        <TabsWrapper
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                        >
                            <Tab eventKey="login" title="Login">
                                <LoginForm setKey={setKey} />
                            </Tab>
                            <Tab eventKey="registration" title="Registration">
                                <Registration setKey={setKey} />
                            </Tab>
                        </TabsWrapper>
                }
            </Modal.Body>
            <Modal.Footer className='bg-dark'>
                <div className="d-flex justify-content-center  w-100">
                    <IconButton path={google} />
                </div>
            </Modal.Footer>
        </Wrapper>
    );
};

export default LogRegModal;

const Wrapper = styled(Modal)`
.modal-content {
    border-radius: 1rem!important;
    /* width:420px;
    margin:auto; */

    .modal-title {
        font-size: 1.15rem;
    }
    .modal-header  {
        background-color:var(--bs-dark);
        color: var(--bs-light);
        .btn-close {
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z' fill='rgba(149,164,166,1)'/%3E%3C/svg%3E")!important;
        }
    }
    .modal-footer {
        background-color:var(--bs-dark);
        color: var(--bs-light);
    }
}
    
`;

const TabsWrapper = styled(Tabs)`

.nav-link {
    color: var(--bs-dark);
}
 .nav-link.active {
    color: var(--bs-dark);
    font-weight: 600;
}
`;

type PropsType = {
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>
}