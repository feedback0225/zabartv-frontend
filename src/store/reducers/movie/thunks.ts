import { API_KEY, API_URL } from "@/constants/api";
import { getSessionId } from "@/helpers/getSessionId";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMovieById = createAsyncThunk('movie/getMovieById', async (id: string) => {
	const { data } = await axios.get(
		`${API_URL}/items/selectdata?id=${id}&session_id=${getSessionId()}&token=${API_KEY}`
	);

	return data;
});