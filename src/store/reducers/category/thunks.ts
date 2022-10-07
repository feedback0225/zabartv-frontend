import { API_KEY, API_URL } from "@/constants/api";
import { getSessionId } from "@/helpers/getSessionId";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategory = createAsyncThunk('category/getMovieById', async () => {
	const { data } = await axios.get(
		`${API_URL}/items/selectfullcatdata?session_id=${getSessionId()}&id=1&token=${API_KEY}`
	);

	return data;
});