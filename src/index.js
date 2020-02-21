import React from 'react'
import ReactDom from 'react-dom'

import Search_bar from "./components/search_bar";

// const App = function () {   //вот эта вроде JS6
const App = () =>  {     // а вот это уже Es6, разница в импользовании this
    return (
        <div>
            <Search_bar/>
        </div>
    );
};

// React.render(App)
ReactDom.render(<App />, document.querySelector('.container'));
