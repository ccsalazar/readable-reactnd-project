import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import Header from './components/Header';
import DefaultPost from './components/DefaultPost';
import PostDetails from './components/PostDetails';
import CreatePost from './components/CreatePost';


class App extends Component {


  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={DefaultPost}/>
          <Route path="/posts/:id/comments" component={PostDetails}/>
          <Route path="/create" component={CreatePost}/>
        </Switch>
      </div>
    );
  }
}

export default App;
