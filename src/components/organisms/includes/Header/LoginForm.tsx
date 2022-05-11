import { Button } from '@components/atoms';
import { Col, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';

const LoginForm = () => {
    return (
        <Wrapper>
            <Row>
                <Form.Group as={Col} md="12" controlId="UsernameOrEmailValidation">
                    <Form.Label>Email or Phone</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter Email or Phone "

                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" className="mt-3" controlId="PasswordValidation">
                    <Form.Label> Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Enter Password"

                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

            </Row>
            <p className="ForgetText">Forget Password?</p>
            <Button type="submit" className="mt-2 w-100 text-light border-dark bg-dark FormSubmitBtn">Login</Button>

            <p className="FormText">Dont have any account?<span className="text-primary"> Register</span></p>

        </Wrapper>
    );
};

export default LoginForm;

const Wrapper = styled(Form)`
.form-label {
    font-size: 0.925rem;
    font-weight: 550;
}
.FormSubmitBtn {
    font-size: 0.925rem;
    font-weight: 550;
}
.FormText {
    margin:0.625rem 0 ;
    font-size: 0.925rem;
    font-weight: 550;
    span { 
        text-decoration: underline;
        cursor:pointer;
    }
}
.ForgetText {
    margin:0.625rem 0 ;
    font-size: 0.925rem;
    font-weight: 550;
    color: var(--bs-primary);
    text-decoration: underline;
    cursor:pointer;
}
`;