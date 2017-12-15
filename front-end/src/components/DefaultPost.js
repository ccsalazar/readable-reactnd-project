import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryTabs from './CategoryTabs';
import Card from './Card';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchAllPosts,fetchPostsByCategory} from '../actions/posts';

class DefaultPost extends Component {

  componentDidMount(){
    const {category}=this.props.match.params?this.props.match.params:false;
    if(category){
      this.props.fetchPostsByCategory(category)
    } else {
      this.props.fetchAllPosts();
    }
  }
  render(){
    const {postsIds}=this.props;
    return(
      <section className="default-post">
          <Link to="/create">
          <div className="page-width">
            <button className="btn__new-post btn">
              Create New Post
            </button>
          </div>
          </Link>
        <CategoryTabs />
        {
          postsIds.map(id =>(
          <Card
            key={id}
            id={id}
          />
        ))}
      </section>
    );
  }
}

DefaultPost.propTypes = {
  postsIds:PropTypes.array.isRequired,
  fetchAllPosts:PropTypes.func.isRequired
}

const mapStateToProps = ({posts}) => {
  const postsIds = Object.keys(posts);
  return {
    postsIds
  };
}

const mapDispatchToProps = dispatch => ({
  fetchPostsByCategory: (category)=>dispatch(fetchPostsByCategory(category)),
  fetchAllPosts: ()=>dispatch(fetchAllPosts())
});

export default connect(mapStateToProps,mapDispatchToProps)(DefaultPost);
