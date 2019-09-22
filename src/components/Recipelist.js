import React, {Component} from 'react';
import {connect} from 'react-redux';
import RecipeItem from './Recipeitem';
import {Link} from 'react-router-dom';

class RecipeList extends Component {
    render(){
        return(
            <div>
                {this.props.favoriteRecipes.length > 0 ?
                <h4 className="link">
                    <Link to="/favorites">Favorites</Link>
                </h4>: null}
                {
                    this.props.recipes.map((recipe, index) => {
                    return(
                        <RecipeItem key={index} item={recipe} favoriteBtn={true}></RecipeItem>
                    )
                    }) 
                }

            </div>
        );
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps,null)(RecipeList);