import { Dispatch, FC, SetStateAction } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';

const Registration: FC<PropsType> = ({ setKey }) => {
    return (
        <Wrapper>
            <Row>
                <Form.Group as={Col} md="12" className="mt-3" controlId="UsernameOrEmailValidation">
                    <Form.Label>Email or Phone</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter Email or Phone"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" className="mt-3" controlId="FirstNameValidation">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter First Name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" className="mt-3" controlId="LastNameValidation">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter Last Name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" className="mt-3" controlId="DateOfBirthValidation">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                        required
                        type="date"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" className="mt-3" controlId="GenderValidation">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select aria-label="User Gender">
                        <option>Select Your Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Other</option>
                    </Form.Select>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" className="mt-3" controlId="EducationLevelValidation">
                    <Form.Label>Choose Your Education Level</Form.Label>
                    <Form.Select aria-label="User Gender">
                        <option>Select one</option>
                        <option value="1">School (6 - 10)</option>
                        <option value="2">College</option>
                        <option value="3">University</option>
                    </Form.Select>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="12" className="mt-3" controlId="InstitutionValidation">
                    <Form.Label>Institution Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter Institution Full Name"

                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" className="mt-3" controlId="PasswordValidation">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Password"

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

            <Button type="submit" className="mt-3 w-100 text-light border-dark bg-dark FormSubmitBtn">Login</Button>

            <p className="FormText">Already have an account?<span className="text-primary" onClick={() => setKey('login')}> Login</span></p>

        </Wrapper>
    );
};

export default Registration;

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
`;

type PropsType = {
    setKey: Dispatch<SetStateAction<string>>
};