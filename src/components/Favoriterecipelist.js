import React, {Component} from 'react';
import {connect} from 'react-redux';
import RecipeItem from './Recipeitem';
import { Link } from 'react-router-dom';

class Favoriterecipelist extends Component {
    render(){
        console.log('prop inside favt', this.props.myfavoriteRecipes);
        return (
            <div>
                <h4>
                    <Link to="/">Home</Link>
                </h4>
                <h4>Favorite Recipes</h4>
                {
                    this.props.favoriteRecipes.map((recipe, index) => {
                        console.log('fvt: ', recipe);
                        return(
                            <RecipeItem key={index} item={recipe} favoriteBtn={false} ></RecipeItem>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('state to map', state);
    return {
        favoriteRecipes: state.favoriteRecipes
    }
}

export default connect(mapStateToProps, null)(Favoriterecipelist)