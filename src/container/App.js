import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardList } from '../components/Cardlist';
import { SearchBox } from '../components/SearchBox';
import { Scroll } from '../components/Scroll';
import { requestRobots, setSearchField } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots : state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch (setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}
class App extends Component {
  constructor() {
    super()
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props
    const filteredRobots = robots.filter(robot => {
      const robotName = robot.name.toLowerCase()
      const searchName = searchField.toLowerCase()
      return robotName.includes(searchName)
    })

    if(isPending) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      )
    }
  }

  componentDidMount() {
    this.props.onRequestRobots();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
