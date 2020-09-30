import {useState, useEffect} from 'react'; 
import youtube from '../apis/youtube';

const KEY = 'AIzaSyDc4gwzpXwpLfCvs-oa6ospxLLxedElO0k'


const useVideos = (defaultSearchInput) => {
    const [ videos, setVideos ] = useState([]);

    useEffect(() => {
        search(defaultSearchInput);
    }, [defaultSearchInput]);

    
    const search = async input => {
        const response = await youtube.get('/search', {
            params: {
                q: input,
                part: 'snippet',
                type: 'video',
                maxResults: 10,
                key: KEY
            }
        });
usePostu
        setVideos(response.data.items);
    };
    return [ videos, search];
}

export default useVideos;
