import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState: {
		favoriteNew9: [
			{ videoLink: '', thumbLink: '', videoOwmnerName: '', videoDescription: '', originalVideo: '', vtuberRelated: [{ name: '', iconLink: '' }] },
		],
		liveOn: [],
	},
	reducers: {},
});

// export const {} = createSlice.actions;
export default createSlice;
