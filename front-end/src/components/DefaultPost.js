import React, { Component } from 'react';
import CategoryTabs from './CategoryTabs';
import Card from './Card';
import { connect } from 'react-redux';
import {fetchAllPosts} from '../actions/posts';

class DefaultPost extends Component {


  componentDidMount(){
    this.props.fetchAllPosts();
  }
  render(){
    const {postsArr}=this.props;
    return(
      <section className="default-post">
        <div className="btn">
          Create New Post
        </div>
        <CategoryTabs />
        {
          postsArr.map((post,index)=>(
          <Card
            key={index}
            id={post.id}
            timestamp={post.timestamp}
            title={post.title}
            body={post.body}
            author={post.author}
            category={post.category}
            voteScore={post.voteScore}
            commentCount={post.commentCount}
          />
        ))}
      </section>
    );
  }

}

const mapStateToProps = ({posts}) => {
  const postsArr = Object.values(posts);
  return {
    postsArr
  };
}
const mapDispatchToProps = dispatch => ({
    fetchAllPosts: ()=>dispatch(fetchAllPosts())
});

export default connect(mapStateToProps,mapDispatchToProps)(DefaultPost);
