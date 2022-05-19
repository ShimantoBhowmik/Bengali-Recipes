import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      dishes: []
    };
  }

  componentDidMount() {
    fetch('./data.json')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {dishes: users}
    }, 
    () => {
      console.log(this.state);
    } ));
  }

  render() {
    return (
    <div className='App'> 
      <input className='search-box' type='search' placeholder='Search Recipe' onChange={(e) =>{console.log(e.target.value)}}/>
      {
        this.state.dishes.map((dish) => {
          return <div key ={dish.id}>
            <h1>{dish.name}</h1>
            </div>;
        })
      }
    </div>
  );
}
}

export default App;
