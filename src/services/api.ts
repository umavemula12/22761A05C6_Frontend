import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts'; // Replace with a working API

export const fetchData = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; //  Returns data correctly
    } catch (error) {
        console.error('Error fetching data', error);
        return []; 
    }
};
