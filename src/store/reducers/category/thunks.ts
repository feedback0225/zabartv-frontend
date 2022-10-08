import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/utils/axios';

export const getCategory = createAsyncThunk('category/getMovieById', async () => {
	const { data } = await axios.get('/items/selectfullcatdata', {
		params: {
			id: 1,
		},
	});

	return data;
});
