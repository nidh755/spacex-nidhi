import axios from 'axios';

export default axios.create({
    baseURL:'https://api.spacexdata.com/v3/launches?limit=100',
   // API end point for the first-time page load without any Filters
   
});