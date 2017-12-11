import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
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
    console.log("Tabs",this.props);
    return (
        <div className="category-tabs">
          <div className="category">
            <Link to="/" onClick={this.handleFetchPost.bind(this,'all')} >
              All
            </Link>
          </div>
          <div className="category">
            <Link to="/react/posts" onClick={this.handleFetchPost.bind(this,'react')}>
              React
            </Link>
          </div>
          <div className="category">
            <Link to="/redux/posts" onClick={this.handleFetchPost.bind(this,'redux')}>
              Redux
            </Link>
          </div>
          <div className="category">
            <Link to="/udacity/posts" onClick={this.handleFetchPost.bind(this,'udacity')}>
              Udacity
            </Link>
          </div>
          <div className="category">
            <SortSelect />
          </div>
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
