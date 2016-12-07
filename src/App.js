import React, { Component } from 'react';
import posts from './posts'

// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {
  render() {
    return (
      <div>
        <div className="filter">
          <input type="text" placeholder="Ingresa el término de búsqueda" />
        </div>
        <ul>
          <li>
            <a href={posts[0].url}><img src={posts[0].image } /></a>
            <p>{ posts[0].title }</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default App


