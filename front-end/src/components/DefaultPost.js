import React, { Component } from 'react';
import CategoryTabs from './CategoryTabs';
import Card from './Card';
import { connect } from 'react-redux';

class DefaultPost extends Component {

  render(){
    const {posts}=this.props;
    // console.log('Default:',this.props.posts)
    return(
      <section className="default-post">
        <div className="btn">
          Create New Post
        </div>
        <CategoryTabs />
        {
          posts.map((post,index)=>(
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
  return {
    posts
  };
}

export default connect(mapStateToProps)(DefaultPost);
