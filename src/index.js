import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from "lodash";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetails from "./components/video_detail";

const API_KEY = 'AIzaSyCwXiIPIN-XuI3WZ0BPYo5J_8zRtnrgLKQ';


class App extends Component {
    constructor(param) {
        super(param);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        //так как на запрос уходит время, сначала видим 0, и только чуть позже 5
        this.videoSearch('porno');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, videos => {
            // this.setState({videos : videos})
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            }); // синтаксический сахар
            // videos.map(video => console.log(video));
        });
    }

    render() {
        //Функция, которя может быть вызвана не чаще чем раз в 300милли сек
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetails video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelected={selectedVideo => this.setState({selectedVideo})}
                    // onVideoSelected={selectedVideo => this.setState({selectedVideo : this.state.videos[0]})}
                    videos={this.state.videos}/>
            </div>
        );
    };
}

// React.render(App)
ReactDom.render(<App/>, document.querySelector('.container'));
