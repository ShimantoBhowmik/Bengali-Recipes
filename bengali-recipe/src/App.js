import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      dishes: [],
      searchField: ''
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
    const filteredDishes = this.state.dishes.filter((dish) => {
          return dish.name.toLowerCase().includes(this.state.searchField);
        });
    return (
    <div className='App'> 
      <input className='search-box' 
      type='search' 
      placeholder='Search Recipe' 
      onChange={(e) =>{
        const searchField = e.target.value.toLowerCase();
        this.setState(() => {
          return { searchField };
        })
        }}/>
      {
        filteredDishes.map((dish) => {
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
