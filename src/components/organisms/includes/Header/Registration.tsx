/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormInput, SelectPicker } from '@components/atoms';
import { authAPI } from '@libs/api';
import { useForm } from '@libs/hooks';
import { regValidation } from '@libs/validations';
import { getUserState } from '@store/actions';
import { setAuthUser } from '@store/user/user.actions';
import { regInitialErrors, regInitialValues } from '@utils/constants';
import { useRouter } from 'next/router';
import { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Registration: FC<PropsType> = ({ setKey }) => {
    const router = useRouter();
    const [isLoading, setLoading] = useState<boolean>(false);
    const _isMounted = useRef(true);
    const {
        popup: { isActive },
    } = useSelector(getUserState);

    useEffect(() => {
        return () => {
            _isMounted.current = false;
        };
    }, []);

    const handleFormSubmit = async () => {
        setLoading(true);
        try {
            const { success, data, message } = await authAPI.userRegister(values);
            if (success) {
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
                    setLoading(false);
                } finally {
                    if (_isMounted.current) {
                        setLoading(false);
                    }
                }
            }
            else {
                setLoading(false);
                alert(message);
                console.log(message);

            }
        } catch (error) {
            setLoading(false);
            console.log(error);

        }

    };

    const { values, errors, setErrors, handleSubmit, handleChange, handleSelectChange } = useForm({
        initialValues: regInitialValues,
        initialErrors: regInitialErrors,
        validate: regValidation,
        onCallback: handleFormSubmit,
    });

    return (
        <Wrapper noValidate onSubmit={handleSubmit}>
            <Row>
                <Col md={12}>
                    <FormInput
                        required
                        type="text"
                        name="phoneNumber"
                        label='Phone Number'
                        onChange={handleChange}
                        value={values.phoneNumber}
                        message={errors.phoneNumber}
                        placeholder="Enter your phone number"
                    />
                </Col>
                <Col md={6}>
                    <FormInput
                        required
                        type="text"
                        name="firstName"
                        label="First Name"
                        onChange={handleChange}
                        value={values.firstName}
                        message={errors.firstName}
                        placeholder="Enter First Name"
                    />
                </Col>
                <Col md={6}>
                    <FormInput
                        required
                        type="text"
                        name="lastName"
                        label="Last Name"
                        onChange={handleChange}
                        value={values.lastName}
                        message={errors.lastName}
                        placeholder="Enter Last Name"
                    />

                </Col>
                <Col md={6}>
                    <FormInput
                        required
                        type="date"
                        label="Date of Birth"
                        name='dateOfBirth'
                        onChange={handleChange}
                        value={values.dateOfBirth}
                        message={errors.dateOfBirth}
                    />

                </Col>
                <Col md={6}>
                    <SelectPicker
                        label="Gender"
                        name="gender"
                        placeholder="Choose your gender"
                        items={genderItems.map((e) => ({ label: e.label, value: e.value }))}
                        value={values.gender}
                        clickHandler={handleSelectChange}
                        message={errors.gender}
                        disabled={genderItems.length < 1}
                        required
                    />
                </Col>
                <Col md={12}>
                    <SelectPicker
                        label="Education Level"
                        name="educationalLevel"
                        placeholder="Choose Education Level"
                        items={educationLevelItems.map((e) => ({ label: e.label, value: e.value }))}
                        value={values.educationalLevel}
                        clickHandler={handleSelectChange}
                        message={errors.educationalLevel}
                        disabled={educationLevelItems.length < 1}
                        required
                    />

                </Col>

                <Col md={12}>
                    <FormInput
                        required
                        type="text"
                        label="Institution Name"
                        name='institutionName'
                        onChange={handleChange}
                        value={values.institutionName}
                        message={errors.institutionName}
                    />
                </Col>
                <Col md={12}>
                    <FormInput
                        required
                        type="password"
                        label="Password"
                        name='password'
                        onChange={handleChange}
                        value={values.password}
                        message={errors.password}
                    />
                </Col>
                <Col md={12}>
                    <FormInput
                        required
                        type="password"
                        label="Confirm Password"
                        name='confirmPassword'
                        onChange={handleChange}
                        value={values.confirmPassword}
                        message={errors.confirmPassword || values.confirmPassword !== '' && values.password !== values.confirmPassword && 'Your Password does not matched'}
                    />
                </Col>

            </Row>

            <Button type="submit" className="mt-3 w-100 text-light border-dark bg-dark FormSubmitBtn">{isLoading ? 'Please Wait...' : 'Register'}</Button>

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

const educationLevelItems = [
    {
        label: 'School (6 - 10)',
        value: 'School'
    },
    {
        label: 'College',
        value: 'College'
    },
    {
        label: 'University',
        value: 'University'
    },
];

const genderItems = [
    {
        label: "Male",
        value: "Male"
    },
    {
        label: "Female",
        value: "Female"
    },
    {
        label: "Other",
        value: "Other"
    },
]