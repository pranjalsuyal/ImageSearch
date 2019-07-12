import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
            Authorization:'Client-ID 87725fc943be96ee4edb7848df8db6fc2cc77f6bac4539303b235e881835d9fe'
    }
});