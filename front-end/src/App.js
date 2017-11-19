import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import Header from './components/Header';
import DefaultPost from './components/DefaultPost';
import PostDetails from './components/PostDetails';
import CreatePost from './components/CreatePost';


class App extends Component {
  state = {
        backend: 'backend-data'
      }

  componentDidMount() {
    const url = `http://localhost:3001/categories`;
    console.log('fetching from url', url);
    fetch(url, { headers: { 'Authorization': 'whatever-you-want' } })
      .then( (res) => { return(res.text()) })
      .then((data) => {
        this.setState({backend:data});
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={DefaultPost}/>
          <Route path="/details" component={PostDetails}/>
          <Route path="/create" component={CreatePost}/>
        </Switch>
      </div>
    );
  }
}

export default App;
