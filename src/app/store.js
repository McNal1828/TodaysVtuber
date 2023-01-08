import { configureStore } from '@reduxjs/toolkit';
import { favoriteSlice } from './favoriteSlice';
import { tvapi } from './api';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
export const store = configureStore({
	reducer: {
		favorite: favoriteSlice.reducer,
		[tvapi.reducerPath]: tvapi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tvapi.middleware),
});
// setupListeners(store.dispatch);
