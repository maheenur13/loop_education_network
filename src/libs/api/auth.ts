/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPageContext } from 'next';
import { BaseAPI } from './baseAPI';
import { BR, IAuth, IPayloadGetOTP, IUpdatePassword } from './interfaces';

class AuthAPI extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	validateAuth = (token: string, ctx?: NextPageContext) =>
		this.post<BR<IAuth>>('auth/patient-token-verification', { token }, ctx);

	resetPassSendOTP = (mobileNumber: string) => this.post<BR<string>>('auth/forgot-password', { mobileNumber });

	resetPassCheckOTP = (mobileNumber: string, code: string) =>
		this.post<BR<string>>('auth/forgot-password/check-otp', { mobileNumber, code });

	resetPassword = (mobileNumber: string, password: string, code: string) =>
		this.post<BR<string>>('auth/update-password', { mobileNumber, password, code });

	login = (phoneNumber: string, password: string) => this.post<BR<IAuth>>('auth/login', { phoneNumber, password });

	userRegister = (payload: any) => {
		return this.post<BR<string>>('auth/registration', payload);
	};

	authGetOTP = (payload: IPayloadGetOTP) => this.post<BR<string>>('auth/register/phone', payload);
	updatePassword = (payload: IUpdatePassword) => this.post<BR<string>>('auth/update-new-password', payload);
}

export const authAPI = new AuthAPI(process.env.apiAuthURL);
