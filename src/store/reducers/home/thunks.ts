import { API_KEY, API_URL } from "@/constants/api";
import { getSessionId } from "@/helpers/getSessionId";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getHomeCategories = createAsyncThunk('home/getHomeCategories', async () => {
	const { data } = await axios.get(
		`${API_URL}/items/selectdataonhome?session_id=${getSessionId()}&token=${API_KEY}`
	);

	return data;
});