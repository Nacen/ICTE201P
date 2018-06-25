import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import Scroll from '../components/Scroll.js';
import SearchBox from '../components/SearchBox.js'
import {robots} from '../robots.js';
import './App.css';

class App extends Component {
    constructor () {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }
    render () {
        const { robots, searchfield } = this.state;    
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return !robots.length ? 
            <h1 className="tc">Loading</h1> :
            (
                <div className="tc">
                    <h1>ICTE</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <CardList robots = {filteredRobots} />
                    </Scroll>
                </div>
            );
    }
}

export default App;