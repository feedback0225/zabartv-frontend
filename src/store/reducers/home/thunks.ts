import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/utils/axios';

export const getHomeCategories = createAsyncThunk('home/getHomeCategories', async () => {
	const { data } = await axios.get('/items/selectdataonhome');

	return data;
});
