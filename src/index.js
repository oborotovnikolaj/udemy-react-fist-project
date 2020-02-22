import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import Search_bar from "./components/search_bar";

const API_KEY = 'AIzaSyCwXiIPIN-XuI3WZ0BPYo5J_8zRtnrgLKQ';
YTSearch({key: API_KEY, term: 'porno'}, function (data) {
    console.log(data)
});

// const App = function () {   //вот эта вроде JS6
const App = () => {     // а вот это уже Es6, разница в импользовании this
    return (
        <div>
            <Search_bar/>
        </div>
    );
};

// React.render(App)
ReactDom.render(<App/>, document.querySelector('.container'));
