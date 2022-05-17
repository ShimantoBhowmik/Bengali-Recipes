import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      dishes: [
        {name : 'Khichuri',},
        {name : 'Biriyani',},
        {name : 'Curry',},
      ]
    };
  }
  render() {
    return (
    <div className='App'> 
      {
        this.state.dishes.map((dish) => {
          return <h1>{dish.name}</h1>;
        })
      }
    </div>
  );
}
}

export default App;
