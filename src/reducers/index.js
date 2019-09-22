import { SET_RECIPES, FAVORITE_RECIPES } from '../actions/index';
import { combineReducers } from 'redux';


function recipes(state=[], action){
    //console.log('recipes reducer item value  ', action.items);
    switch(action.type){
        case SET_RECIPES:
            return action.items;

            default:
                return state;
    }
}

function favoriteRecipes(state=[], action){
    switch(action.type){
        case FAVORITE_RECIPES:
            state = [...state,action.recipes];
            return state;
        
        default:
            return state;

    }
}

const rootReducer = combineReducers({ recipes, favoriteRecipes });

export default rootReducer;