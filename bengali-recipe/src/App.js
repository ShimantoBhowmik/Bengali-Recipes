import { Component } from 'react';
//import logo from './logo.svg';
import RecipeList  from './components/recipe-list/recipe-list';
import SearchBox from './components/search-box/search-box';
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
    }));
  }

  onSearchChange =(e) =>{
        const searchField = e.target.value.toLowerCase();
        this.setState(() => {
          return { searchField };
        })
        } 

  render() {

    const {dishes, searchField} = this.state;
    const {onSearchChange} = this;
    const filteredDishes = dishes.filter((dish) => {
          return dish.name.toLowerCase().includes(searchField);
        });
    return (
    <div className='App'> 
    <h1 className = 'app-title'> Bengali Recipes</h1>
      <SearchBox 
      className = 'recipe-search-box'
      onChangeHandler = {onSearchChange} 
      placeholder = 'search recipes' 
      />
      <RecipeList dishes = {filteredDishes}/>
    </div>
  );
}
}

export default App;
