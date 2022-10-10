import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/utils/axios';

export const getCategory = createAsyncThunk('category/getMovieById', async (id: number) => {
	const { data } = await axios.get('/items/selectfullcatdata', {
		params: {
			id,
		},
	});

	return data;
});
