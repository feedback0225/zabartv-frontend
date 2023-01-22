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
