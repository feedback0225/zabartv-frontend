import { API_KEY, API_URL } from "@/constants/api";
import { getSessionId } from "@/helpers/getSessionId";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPackages = createAsyncThunk('packages/getPackages', async () => {
	const { data } = await axios.get(
		`${API_URL}/packages/list?session_id=${getSessionId()}&token=${API_KEY}`
	);

	return data;
});