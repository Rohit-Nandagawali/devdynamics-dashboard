import axios from 'axios';
import { ApiResponse } from '../types/types';

// const API_URL = 'http://localhost:3000/data';
const API_URL = process.env.REACT_APP_API_URL;

export const fetchActivityData = async () => {
    const response = await axios.get<ApiResponse>(`${API_URL}/data`);
    return response.data;
};