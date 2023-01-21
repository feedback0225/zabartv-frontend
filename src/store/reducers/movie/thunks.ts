import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/utils/axios';
import { IGradeResponse } from '@/types/IGrade';
import { ICheckRating } from '@/types/ICheckRating';

export const getMovieBySlug = createAsyncThunk('movie/getMovieBySlug', async (slug: string) => {
	const { data } = await axios.get('/items/selectdataforslug', {
		params: {
			slug,
		},
	});

	return data;
});

export const gradeFilm = createAsyncThunk(
	'movie/getUserRating',
	async ({ id, rating }: IGradeResponse, thunkAPI) => {
		await axios.get<ICheckRating>('/items/rating', {
			params: {
				film_id: id,
				type: 'add',
				rating,
			},
		});
		return rating;
	}
);
