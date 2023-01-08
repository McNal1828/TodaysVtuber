import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tvapi = createApi({
	reducerPath: 'TVAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1828/api/todaysvtuber/' }),
	tagTypes: ['tv'],
	endpoints: (builder) => ({
		getAllKirinuker: builder.query({
			query: () => `kirinuker`,
		}),
		getKirinukerName: builder.query({
			query: ({ name }) => `kirinuker/name/${name}`,
			// providesTags: (result, error, arg) => [{ type: 'tv', id: arg.name }],
		}),
		getKirinukerId: builder.query({
			query: ({ id }) => `kirinuker/id/${id}`,
			// providesTags: (result, error, arg) => [{ type: 'tv', id: arg.id }],
		}),
		getKirinukerVideos: builder.query({
			query: ({ id }) => `/kirinuker/video/${id}`,
			// providesTags: (result, error, arg) => [{ type: 'tv', id: arg.id }],
		}),
		getAllVtuber: builder.query({
			query: () => `vtuber`,
		}),
		getSomeVtuber: builder.query({
			query: ({ name }) => `vtuber/${name}`,
			// providesTags: (result, error, arg) => [{ type: 'tv', id: arg.name }],
		}),
		getClipVtuber: builder.query({
			query: ({ id }) => `clips/vtuber/${id}`,
			// providesTags: (result, error, arg) => [{ type: 'tv', id: arg.name }],
		}),
		getClipVideo: builder.query({
			query: ({ id }) => `clips/video/${id}`,
			// providesTags: (result, error, arg) => [{ type: 'tv', id: arg.name }],
		}),
		getClipRelate: builder.query({
			query: ({ id }) => `clips/relate/${id}`,
			// providesTags: (result, error, arg) => [{ type: 'tv', id: arg.name }],
		}),
	}),
});
