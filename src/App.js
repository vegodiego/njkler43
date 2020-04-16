import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {
  constructor(){
    super();
    this.change = this.change.bind(this);
    this.filter = this.filter.bind(this);
    this.state = {
      text: ""
    }
  }
  change(event){
    this.setState({
      text: event.target.value
    });
  }
  filter(){
    var postShow  = [];
    posts.forEach((post,index) => {
      if (post.title.toLowerCase().indexOf(this.state.text.toLowerCase()) === -1)
        return;
      postShow.push(<li key={index}><a href={post.url}><img src={post.image } /></a><p>{ post.title }</p></li>);
    });
    return postShow;
    }
  render() {
    return (
      <div>
        <div className="filter">
          <input type="text" placeholder="Ingresa el término de búsqueda" value={this.state.text} onChange={this.change} />
        </div>
        <ul>
           {this.filter()}
        </ul>
      </div>
    )
  }
}


export default App 