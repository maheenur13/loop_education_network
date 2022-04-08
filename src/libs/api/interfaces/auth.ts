/* eslint-disable @typescript-eslint/no-empty-interface */
export interface IAuth {
	id: string;
	firstName: string;
	lastName: string;
	avatarURL?: string;
	mobileNumber?: string;
	token: string;
	email?: string;
}

export interface IAuthPayload {
	mobileNumber?: string;
	email?: string;
	password: string;
}

export interface IPayloadGetOTP {
	firstName: string;
	lastName: string;
	mobileNumber: string;
}

export interface IPayloadVerifyOTP {
	mobileNumber: string;
	code: string;
	password: string;
}
export interface IUpdatePassword {
	oldPassword: string;
	newPassword: string;
	confirmPassword: string;
	mobileNumber: string;
}
