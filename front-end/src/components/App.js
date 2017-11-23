import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import Header from './Header';
import DefaultPost from './DefaultPost';
import PostDetails from './PostDetails';
import CreatePost from './CreatePost';
import {connect} from 'react-redux';
import {initializePosts} from '../actions';
// import * as ServerAPIUtil from '../utils/api'


class App extends Component {

  componentDidMount () {
    this.props.initPosts();
  }

  render() {
    console.log('Root App',this.props)
     // ServerAPIUtil.getALLPosts().then(posts=>console.log('data:',posts))
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

const mapStateToProps = ({posts,comments}) => {
  return {
    posts,
    comments
  };
}

const mapDispatchToProps = dispatch => ({
    initPosts: ()=>dispatch(initializePosts())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
