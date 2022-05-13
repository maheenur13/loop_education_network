import { Button, FormInput } from '@components/atoms';
import { authAPI } from '@libs/api';
import { useForm } from '@libs/hooks';
import { loginValidation } from '@libs/validations';
import { authPopup, getUserState } from '@store/actions';
import { setAuthUser } from '@store/user/user.actions';
import { loginInitialErrors, loginInitialValues } from '@utils/constants';
import { useRouter } from 'next/router';
import { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const LoginForm: FC<PropsType> = ({ setKey }) => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const _isMounted = useRef(true);
    const router = useRouter();
    const dispatch = useDispatch();
    const {
        popup: { isActive },
    } = useSelector(getUserState);

    useEffect(() => {
        return () => {
            _isMounted.current = false;
        };
    }, []);

    const handleFormSubmit = async () => {
        // console.log('oho');

        setLoading(true);
        try {
            const { success, data, message } = await authAPI.login(values?.phoneNumber, values?.password);
            if (success) {
                // console.log(data);
                setAuthUser(data);
                if (!isActive) router.push(router.query?.redirect ? String(router.query.redirect) : '/');
            } else {
                setErrors((prevState) => ({ ...prevState, phoneNumber: String(message) }));
                setLoading(false);
            }
        } catch (error) {
            // setLoading(false);
        } finally {
            if (_isMounted.current) {
                setLoading(false);
            }
        }
    };
    const { values, errors, setErrors, handleSubmit, handleChange } = useForm({
        initialValues: loginInitialValues,
        initialErrors: loginInitialErrors,
        validate: loginValidation,
        onCallback: handleFormSubmit,
    });

    return (
        <Wrapper noValidate onSubmit={handleSubmit}>
            <Row>
                <Col md={12}>
                    <FormInput
                        name="phoneNumber"
                        placeholder="Phone number"
                        label='Phone Number'
                        maxLength={11}
                        onChange={handleChange}
                        value={values.phoneNumber}
                        message={errors.phoneNumber}
                        required

                    />
                </Col>
                <Col md={12}>
                    <FormInput
                        required
                        type="password"
                        name="password"
                        onChange={handleChange}
                        message={errors.password}
                        value={values.password}
                        label="Password"
                        placeholder="Enter Password"

                    />
                </Col>
            </Row>
            <p className="ForgetText" onClick={() => {
                if (isActive) {
                    dispatch(authPopup({ isActive: true, type: 'forgot-password' }));
                }
                else {
                    setKey('forgot-pass');
                }
            }}>Forget Password?</p>
            <Button type="submit" className="mt-2 w-100 text-light border-dark bg-dark FormSubmitBtn" disabled={isLoading}>{isLoading ? 'please wait' : 'Login'}</Button>

            <p className="FormText">Dont have any account?<span className="text-primary" onClick={() => setKey('registration')}> Register</span></p>
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

type PropsType = {
    setKey: Dispatch<SetStateAction<string>>
};