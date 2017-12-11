import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createNewComment} from '../actions/comments';

class AddComment extends Component{

state={
  comment:{
    id:'',
    timestamp:'',
    body:'',
    author:'',
    parentId:''
  }
}

componentDidMount(){
  const postId = this.props.id;
  this.setState({
    comment:{
      ...this.state.comment,
      parentId:postId
    }
  })
}

handleSubmit(e){
  e.preventDefault();
  this.props.dispatch(createNewComment(this.state.comment));
  this.setState({
    comment:{
      ...this.state.comment,
      body:'',
      author:''
    }
  })
}

handleInputChange(e){
  const name = e.target.name;
  const value = e.target.value;
  this.setState({
    comment:{
      ...this.state.comment,
      [name]: value
    }
  })
}


  render(){
    const {body,author}=this.state.comment
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Name..."
            name="author"
            value={author}
            onChange={this.handleInputChange.bind(this)}
          />
          <input
            type="text"
            placeholder="Write a comment..."
            name="body"
            value={body}
            onChange={this.handleInputChange.bind(this)}
          />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

AddComment.propTypes = {
  id:PropTypes.string.isRequired,
  dispatch:PropTypes.func.isRequired
}

export default connect()(AddComment);
