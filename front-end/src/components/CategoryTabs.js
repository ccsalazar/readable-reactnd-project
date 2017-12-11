import React,{ Component } from 'react';
import SortSelect from './SortSelect';
import {Link} from 'react-router-dom';
import {fetchPostsByCategory,fetchAllPosts} from '../actions/posts';
import {connect} from 'react-redux';

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
