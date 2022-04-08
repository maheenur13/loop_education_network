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

	sellerRegister = (payload: Record<string, string>) => {
		return this.post<BR<string>>('auth/seller_registration', payload);
	};

	authGetOTP = (payload: IPayloadGetOTP) => this.post<BR<string>>('auth/register/phone', payload);
	updatePassword = (payload: IUpdatePassword) => this.post<BR<string>>('auth/update-new-password', payload);
}

export const authAPI = new AuthAPI(process.env.apiAuthURL);
