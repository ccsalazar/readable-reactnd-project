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
          <Route exact path="/posts/:id/edit" component={CreatePost}/>
          <Route exact path="/create" component={CreatePost}/>
          <Route path="/:category/:id" component={PostDetails}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
