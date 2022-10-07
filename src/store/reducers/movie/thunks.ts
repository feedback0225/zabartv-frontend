import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/utils/axios";

export const getMovieById = createAsyncThunk('movie/getMovieById', async (id: string) => {
	const { data } = await axios.get('/items/selectdata', {
		params: {
			id
		}
	});

	return data;
});