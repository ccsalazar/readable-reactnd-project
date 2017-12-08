import React, { Component } from 'react';
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
            <div className="btn">
              Create New Post
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
