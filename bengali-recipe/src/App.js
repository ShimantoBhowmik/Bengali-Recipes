import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      dishes: [
        {name : 'Khichuri',
        id : "1234567e",},
        {name : 'Biriyani',
        id : "12345678910e",},
        {name : 'Curry',
        id : "167e",},
      ]
    };
  }
  render() {
    return (
    <div className='App'> 
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
