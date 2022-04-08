import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '@store';

const initialState: IInitialState = {
	isMobile: false,
};

const slice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setMobile: (state, action: PayloadAction<boolean>) => {
			state.isMobile = action.payload;
		},
	},
});

export default slice.reducer;

export const { setMobile } = slice.actions;

export const getAppState = (state: AppState): IInitialState => state.app;

interface IInitialState {
	isMobile: boolean;
}
