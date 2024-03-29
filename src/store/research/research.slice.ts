import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '@store';

const initialState: IResearchState = {
	researchData: [],
};

const slice = createSlice({
	name: 'research',
	initialState,
	reducers: {
		addNewResearchPost: (state, action: PayloadAction<ISinglePost>) => {
			state.researchData.unshift(action.payload);
		},
	},
});

export default slice.reducer;

export const { addNewResearchPost } = slice.actions;

export const getResearchState = (state: AppState): typeof initialState => state.research;

export interface TeamType {
	name: string;
	educationInstitute: string;
}

export interface ISinglePost {
	id: string;
	createdAt: string;
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

export interface IResearchState {
	researchData: ISinglePost[];
}
