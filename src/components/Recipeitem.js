import React, {Component} from 'react';
import {connect} from 'react-redux';
import {favoriteRecipes} from '../actions';

class RecipeItem extends Component {

    constructor(){
        super();

        this.state = {
            favorited: false
        }
    }

    favorite(item){
        this.props.favoriteRecipes(item);
        this.setState({favorited: true});
    }

    render(){
        let { item } = this.props;
        item.thumbnail =  item.thumbnail.length === 0 ? "https://icon-library.net/images/food-icon-png/food-icon-png-25.jpg" : item.thumbnail ;

        return (
            <div className="recipe-item">
                {
                this.props.favoriteBtn ?
                (this.state.favorited ? 
                    <div className="star">&#9733;</div>:
                    <div className="star" onClick={() => this.favorite(item)}> &#9734; </div>
                ) : null 
                }
                
            <div className="recipe-text">
                <a href={item.href}>
                    <h4>{item.title}</h4>
                </a>
                <p>{item.ingredients}</p>
            </div>
            <img src={item.thumbnail} alt={item.title} className="recipe-img"></img>
            </div>
        )
    }
}

export default connect(null,{favoriteRecipes})(RecipeItem);