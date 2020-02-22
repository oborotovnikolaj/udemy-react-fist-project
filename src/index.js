import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";

const API_KEY = 'AIzaSyCwXiIPIN-XuI3WZ0BPYo5J_8zRtnrgLKQ';


class App extends Component {
    constructor(param) {
        super(param);
        this.state = {videos: []};
        //так как на запрос уходит время, сначала видим 0, и только чуть позже 5
        YTSearch({key: API_KEY, term: 'porno'}, videos => {
            // this.setState({videos : videos})
            this.setState({videos}); // синтаксический сахар
            // videos.map(video => console.log(video));
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoList videos = {this.state.videos}/>
            </div>
        );
    };
}

// React.render(App)
ReactDom.render(<App/>, document.querySelector('.container'));
