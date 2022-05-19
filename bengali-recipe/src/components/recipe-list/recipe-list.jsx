import { Component } from "react";

class RecipeList extends Component{
    render() {
        const {dishes} = this.props;
        return (
        <div> 
            {dishes.map(dish =>(
                <h1 key = {dish.id}>{dish.name}</h1>
            ) )}
        </div>
        )
    }
}

export default RecipeList;
