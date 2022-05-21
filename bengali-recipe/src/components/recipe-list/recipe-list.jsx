import { Component } from "react";
 
import Recipe from '../recipe/recipe'
import './recipe-list.css';

class RecipeList extends Component{
    render() {
        const {dishes} = this.props;
        return (
        <div className="recipe-list"> 
            {dishes.map(dish =>{
                return(
                <Recipe dish = {dish}/>
        )} )}
        </div>
        )
    }
}

export default RecipeList;
