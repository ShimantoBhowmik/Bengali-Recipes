import { Component } from "react";

import './recipe.css';

class Recipe extends Component{
    render(){ 
        const{id,name,email} = this.props.dish;
    return(
   <div className= 'recipe-container' key = {id}>
    <img 
    alt= {`Recipe ${name}`} 
    src= {`recipe-images/${id}.jpg`} 
    style = {{width: 300,height: 300 }}/>
    <h2>{name}</h2>
    <button type = "button "className="recipe-button" onClick={
        (e) => {
            e.preventDefault();
            window.location.href=`https:/www.${email}`;
        }
    }>{email}</button>
    </div>     
    )}
}

export default Recipe;