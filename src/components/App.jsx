import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from '../components/VideoList';
import VideoDetail from './VideoDetails';
import useVideos from '../hooks/useVideos';





const App = () => {
    
    const [selectedVideos, setSelectedVideos] = useState(null)
    const [ videos, search ] = useVideos('salam bali');

    useEffect( () => {
        setSelectedVideos(videos[0])
    }, [videos])


    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail vid={selectedVideos} />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={setSelectedVideos} videos={videos} />
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default App;



