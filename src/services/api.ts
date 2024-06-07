import axios from 'axios';
import { ApiResponse } from '../types/types';

const API_URL = 'http://localhost:3001/data';

export const fetchActivityData = async () => {
    const response = await axios.get<ApiResponse>(API_URL);
    return response.data;
};