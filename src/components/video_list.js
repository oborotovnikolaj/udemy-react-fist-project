import React from 'react';
import VideoListItem from "./video_list_item";

const VideoList = (props) => {
    const VideoItems = props.videos.map((video) => {
        // передаем проперти video значение video
        return <VideoListItem video = {video}/>
    });
    return (
        <ul className="col-md-4 list-group">
            {VideoItems}
        </ul>
    )
};

//loop in js in correct way
// var array = [1,2,3]
// array.map(function(number) {return '<div>' + number + '</div>'});

export default VideoList;