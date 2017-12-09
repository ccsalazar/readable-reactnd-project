import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import {withRouter} from 'react-router';
import Header from './Header';
import DefaultPost from './DefaultPost';
import PostDetails from './PostDetails';
import CreatePost from './CreatePost';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={DefaultPost}/>
          <Route exact path="/:category/posts" component={DefaultPost}/>
          <Route path="/posts/:id/comments" component={PostDetails}/>
          <Route path="/posts/:id/edit" component={CreatePost}/>
          <Route path="/create" component={CreatePost}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
