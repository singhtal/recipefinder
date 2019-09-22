import React, {Component} from 'react';
import './App.css';
import Searchrecipes from './Searchrecipes';
import '../styles/index.css'
import Recipelist from './Recipelist';
import Favoriterecipelist from './Favoriterecipelist';

class App extends Component {
  render(){
    return (
      <div>
        <h2>Recipe Finder</h2>

        <Searchrecipes></Searchrecipes>

        <Recipelist></Recipelist>

      </div>
    )
  }
}

export default App;
