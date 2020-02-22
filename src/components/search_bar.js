// import React from 'react';
import React, {Component} from 'react';  //this mean pull variable React.Component and call it Component

// class SearchBar extends React.Component {
class Search_bar extends Component {
    render() {
        return (
            <div>
                {/*<input onChange={this.onChangeInput}/>*/}
                <input onChange={(event) => console.log(event.target.value)}/>
            </div>
        );
    }

    //название обычно дается из того какой элемент менятеся, в данном случае input
    // onChangeInput(event) {
    //     console.log(event.target.value);
    //     // console.log(event); // можно посмотреть что из себя представляет event
    // }
}


export default Search_bar;
