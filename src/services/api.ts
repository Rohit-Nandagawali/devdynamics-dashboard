import axios from 'axios';
import { ApiResponse } from '../types/types';

// const API_URL = 'http://localhost:3000/data';
const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '/api';
console.log(API_URL);


export const fetchActivityData = async () => {
    const response = await axios.get<ApiResponse>(`/db.json`);
    return response.data;
};