import React, { Component } from 'react';
import CategoryTabs from './CategoryTabs';
import Card from './Card';

class DefaultPost extends Component {

  state ={
    posts:[]
  }

  componentDidMount() {
    const url = `http://localhost:3001/posts`;
    console.log('fetching from url', url);
    fetch(url, { headers: { 'Authorization': 'whatever-you-want' } })
      .then( (res) => { return(res.json()) })
      .then((data) => {
        this.setState({posts:data});
      });
  }
  
  render(){
    return(
      <section className="default-post">
        <div className="btn">
          Create New Post
        </div>
        <CategoryTabs />
        {
          this.state.posts.map((post,index)=>(
          <Card
            key={index}
            timestamp={post.timestamp}
            title={post.title}
            body={post.body}
            author={post.author}
            category={post.category}
            voteScore={post.voteScore}
            commentCount={post.commentCount}
          />))
        }
      </section>
    );
  }

}

export default DefaultPost;
