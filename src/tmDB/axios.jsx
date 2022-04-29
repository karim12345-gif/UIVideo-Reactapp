import axios from 'axios'



const movieURL = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})


export default movieURL