import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

// constructor() {
//   super()
//   this.state = {
//     robots: [],
//     searchfield: ''
//   }
function App(){
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => setRobots(users));
        console.log(count)  
  },[count]);


  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }

    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>

          <SearchBox searchChange={onSearchChange}/>
          <button onClick={() => {
            setCount(count + 1)
          }}>Count Up</button>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response=> response.json())
  //     .then(users => {this.setState({ robots: users})});
  // }




export default App;