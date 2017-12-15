import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import {withRouter,Redirect} from 'react-router';
import Header from './Header';
import DefaultPost from './DefaultPost';
import PostDetails from './PostDetails';
import CreatePost from './CreatePost';
import PageNotFound from './PageNotFound';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={DefaultPost}/>
          <Route exact path="/posts/:id/edit" component={CreatePost}/>
          <Route exact path="/create" component={CreatePost}/>
          <Route exact path="/404" component={PageNotFound} />
          <Route path="/:category/:id" component={PostDetails}/>
          <Route path="/:category" component={DefaultPost}/>
          <Redirect from="*" to="/404"/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
