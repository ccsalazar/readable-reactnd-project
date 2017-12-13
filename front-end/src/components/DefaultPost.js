import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryTabs from './CategoryTabs';
import Card from './Card';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchAllPosts} from '../actions/posts';

class DefaultPost extends Component {

  componentDidMount(){
    this.props.fetchAllPosts();
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
    fetchAllPosts: ()=>dispatch(fetchAllPosts())
});

export default connect(mapStateToProps,mapDispatchToProps)(DefaultPost);
