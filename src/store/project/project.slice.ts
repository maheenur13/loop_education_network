import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '@store';
import { ISinglePost } from '@store/actions';

const initialState: IProjectState = {
	projectData: [],
};

const slice = createSlice({
	name: 'project',
	initialState,
	reducers: {
		addNewProjectPost: (state, action: PayloadAction<ISinglePost>) => {
			state.projectData.unshift(action.payload);
		},
	},
});

export default slice.reducer;

export const { addNewProjectPost } = slice.actions;

export const getProjectState = (state: AppState): typeof initialState => state.project;

// export interface TeamType {
// 	name: string;
// 	educationInstitute: string;
// }

// export interface ISinglePost {
// 	title: string;
// 	image: string;
// 	pdf: string;
// 	description: string;
// 	link: string;
// 	type: 'SINGLE' | 'MANY';
// 	team: TeamType[];
// 	supervisorName: string;
// 	supervisorInstitute: string;
// 	supervisorSubject: string;
// }

export interface IProjectState {
	projectData: ISinglePost[];
}
