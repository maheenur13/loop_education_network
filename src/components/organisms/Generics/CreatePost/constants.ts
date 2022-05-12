export const postOptionsInitialValues: PostOptionsType = {
	title: '',
	image: '',
	pdf: '',
	description: '',
	link: '',
	type: 'SINGLE',
	team: [
		{
			name: '',
			educationInstitute: '',
		},
	],
	supervisorName: '',
	supervisorInstitute: '',
	supervisorSubject: '',
};

interface TeamType {
	name: string;
	educationInstitute: string;
}

export interface PostOptionsType {
	title: string;
	image: string;
	pdf: string;
	description: string;
	link: string;
	type: 'SINGLE' | 'MANY';
	team: TeamType[];
	supervisorName: string;
	supervisorInstitute: string;
	supervisorSubject: string;
}
