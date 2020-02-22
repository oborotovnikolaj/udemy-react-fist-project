import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import Search_bar from "./components/search_bar";

const API_KEY = 'AIzaSyCwXiIPIN-XuI3WZ0BPYo5J_8zRtnrgLKQ';


class App extends Component {
    constructor(param) {
        super(param);
        this.state = {videos : []};
        YTSearch({key: API_KEY, term: 'porno'}, videos => {
            // this.setState({videos : videos})
            this.setState({videos}) // синтаксический сахар
        });
    }

    render() {
        return (
            <div>
                <Search_bar/>
            </div>
        );
    };
}

// React.render(App)
ReactDom.render(<App/>, document.querySelector('.container'));
