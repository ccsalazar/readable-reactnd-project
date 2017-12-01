import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import {withRouter} from 'react-router';
import Header from './Header';
import DefaultPost from './DefaultPost';
import PostDetails from './PostDetails';
import CreatePost from './CreatePost';
import {connect} from 'react-redux';
import {initializePosts} from '../actions/posts';


class App extends Component {

  componentDidMount () {
    // this.props.initPosts();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={DefaultPost}/>
          <Route path="/posts/:id/comments" component={PostDetails}/>
          <Route path="/posts/:id/edit" component={CreatePost}/>
          <Route path="/create" component={CreatePost}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({posts,comments}) => {
  return {
    posts
  };
}

const mapDispatchToProps = dispatch => ({
    initPosts: ()=>dispatch(initializePosts())
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
