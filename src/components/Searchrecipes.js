import React, {Component} from 'react';
import { Form, FormGroup, FormControl, FormLabel , Button } from 'react-bootstrap';

import {connect} from 'react-redux';
import {setRecipes} from '../actions';

class Searchrecipes extends Component{

    constructor(){
        super();

        this.state = {
            ingredients: '',
            dish: ''
        }
    }

    searchOnClick(){
        const url = `http://www.recipepuppy.com/api/?i=${this.state.ingredients}&q=${this.state.dish}`;
        console.log('current url', url);

        fetch(url, {
            method: 'GET'
        }).then( response => response.json())
          .then( json => this.props.setRecipes(json.results))
    }
    render(){
        return(
            
            <Form inline>
                {'  '}
                <FormGroup>
                    <FormLabel >Ingredients</FormLabel >
                    {' '}
                    <FormControl type="text" placeholder="garlic, chicken"
                    onChange={event => 
                        this.setState({ingredients: event.target.value})
                    } />
                </FormGroup>
                    {' '}
                <FormGroup>
                    <FormLabel >Dish</FormLabel >
                        {' '}
                    <FormControl type="text" placeholder="adobo" 
                    onChange={event => 
                        this.setState({dish: event.target.value})
                    } />
                </FormGroup>
                {' '}

                <Button onClick={() => this.searchOnClick()}>Submit</Button>
                {'  '}
            </Form>
        )
    }
}

export default connect(null, {setRecipes})(Searchrecipes);