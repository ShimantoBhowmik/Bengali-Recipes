import { Component } from "react";

import './recipe-list.css';

class RecipeList extends Component{
    render() {
        const {dishes} = this.props;
        return (
        <div className="recipe-list"> 
            {dishes.map(dish =>{
                const{ name, email, id} = dish;
                return(
                <div className= 'recipe-container' key = {id}>
                    <img alt= {`Recipe ${name}`} src= {`recipe-images/${id}.jpg`} style = {{width: 180,height: 180}}/>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
        )} )}
        </div>
        )
    }
}

export default RecipeList;
