import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState: {
		recentVideos: [],
		liveOn: [],
	},
	reducers: {
		resetRecentVideos: (state, action) => {
			state.recentVideos = [];
		},
		addRecentVideos: (state, action) => {
			state.recentVideos.push(action.payload);
			state.recentVideos.sort((a, b) => {
				if (a.upload < b.upload) {
					return 1;
				}
				if (a.upload > b.upload) {
					return -1;
				}
				return 0;
			});
			state.recentVideos = state.recentVideos.slice(0, 10);
		},
	},
});

export const { addRecentVideos, resetRecentVideos } = favoriteSlice.actions;
export default createSlice;
