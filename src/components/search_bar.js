// import React from 'react';
import React, {Component} from 'react';  //this mean pull variable React.Component and call it Component

// class SearchBar extends React.Component {
class Search_bar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: 'default value'};
    }

    render() {
        return (
            <div value={this.state.term}>
                <input onChange={(event) => this.setState({term: event.target.value})}/>
                {/*Current State = {this.state.term}*/}
            </div>
        );
    }
}

export default Search_bar;
