import axios from 'axios';
const KEY = 'AIzaSyDyOFAihF9tKeZ4YTMpVWg7WD4MLA9jKMg';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/channelId="crossfit',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})