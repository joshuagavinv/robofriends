import './App.css';
import React, { Component } from 'react';
import { CardList } from '../components/Cardlist';
import { SearchBox } from '../components/SearchBox';
import { Scroll } from '../components/Scroll';


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      search: ''
    }
  }

  onSearch = (event) => {
    this.setState({search: event.target.value})
  }

  render() {
    const {robots, search} = this.state
    const filteredRobots = robots.filter(robot => {
      const robotName = robot.name.toLowerCase()
      const searchName = search.toLowerCase()
      return robotName.includes(searchName)
    })

    if(!robots.length) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearch}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      )
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({robots : users}))
  }
}

export default App
