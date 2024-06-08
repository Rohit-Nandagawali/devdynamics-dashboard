import axios from 'axios';
import { ApiResponse } from './types/types';

const API_URL = 'http://localhost:3000/data';

export const fetchActivityData = async () => {
    const response = await axios.get<ApiResponse>('./db.json');
    return response.data;
};