import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchPostsByCategory,fetchAllPosts} from '../actions/posts';
import SortSelect from './SortSelect';

class CategoryTabs extends Component {

  handleFetchPost(category,e){
    if (category!=="all"){
      this.props.fetchPostsByCategory(category);
    } else {
      this.props.fetchAllPosts();
    }
  }

  render(){
    return (
        <div className="category-tabs">
            <NavLink
              className="category__non-active"
              activeClassName="category__active"
              exact to="/"
              onClick={this.handleFetchPost.bind(this,'all')}
            >
              All
            </NavLink>
            <NavLink
              className="category__non-active"
              activeClassName="category__active"
              to="/react/posts"
              onClick={this.handleFetchPost.bind(this,'react')}
            >
              React
            </NavLink>
            <NavLink
              className="category__non-active"
              activeClassName="category__active"
              to="/redux/posts"
              onClick={this.handleFetchPost.bind(this,'redux')}
            >
              Redux
            </NavLink>
            <NavLink
              className="category__non-active"
              activeClassName="category__active"
              to="/udacity/posts"
              onClick={this.handleFetchPost.bind(this,'udacity')}
            >
              Udacity
            </NavLink>
            <SortSelect />
        </div>
    );
  }
}

CategoryTabs.propTypes = {
  posts:PropTypes.object.isRequired,
  fetchPostsByCategory:PropTypes.func.isRequired,
  fetchAllPosts:PropTypes.func.isRequired
}

const mapStateToProps = ({posts})=>{
  return{
    posts
  };
}
const mapDispatchToProps = dispatch => ({
  fetchPostsByCategory: (category)=>dispatch(fetchPostsByCategory(category)),
  fetchAllPosts: ()=>dispatch(fetchAllPosts())
});
export default connect(mapStateToProps,mapDispatchToProps)(CategoryTabs);
