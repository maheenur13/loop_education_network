import { Dispatch, FC, SetStateAction } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styled from "styled-components";

const ForgotPass: FC<PropsType> = ({ setKey }) => {
    return (
        <Wrapper>
            <Row>
                <Form.Group as={Col} md="12" controlId="ChangePasswordValidation">
                    <Form.Label>Change Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Change Password"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" className="mt-3" controlId="ConfirmPasswordValidation">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <p className='text-primary BackToLogin' onClick={() => setKey('login')}>Back to Login</p>
            <Button className="btn-dark mt-1 w-100">Update</Button>
        </Wrapper>
    );
};

export default ForgotPass;

const Wrapper = styled(Form)`
    .BackToLogin {
        margin-top: 0.625rem;
        font-size: 0.925rem;
        cursor: pointer;
        text-decoration: underline;
    }
`;

type PropsType = {
    setKey: Dispatch<SetStateAction<string>>
};
export const initialValues = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
};

export const initialErrors = {
    currentPassword: null,
    newPassword: null,
    confirmPassword: null,
};