import React, { Component } from 'react';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import {createNewPost,editPost} from '../actions/posts';
import {fetchPost} from '../actions/posts';

class CreatePost extends Component {

  state = {
    post:{
      author: '',
      title:'',
      category:'',
      body:'',
      id:''
    },
    redirect:false,
    mode:''
  }

  //CHECKS IF EDIT OR CREATE FORM
  componentDidMount(){
    const postIdValid = this.props.match.params.id?this.props.match.params.id:null;
    const mode = postIdValid?'edit':'create';
    if (mode==='edit'){
      this.props.fetchPost(postIdValid);
    }
    this.setState({mode});
  }

  // USED TO FILL EDIT FORM WHEN FETCHED POST IS RECEIVED
  componentWillReceiveProps(nextProps){
    const postIdValid = this.props.match.params.id;
    const {author,title,category,body,id} = nextProps.posts[postIdValid];
    this.setState({
      post:{
        author:author,
        title:title,
        category:category,
        body:body,
        id:id
      }
    })
  }

  handleSubmit (e){
    e.preventDefault();
    const{createNewPost,editPost}=this.props;
    const {mode,post}=this.state;
    mode==='create'?createNewPost(post):editPost(post);
    this.setState({redirect:true});
  }
  handleInputChange(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      post:{
        ...this.state.post,
        [name]: value
      }
    });
  }

  render(){
    const {redirect,mode}=this.state;
    const{author,title,category,body} = this.state.post;
    const pageMode = mode==='edit'?'Edit':'Create';
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-container">
            <h1>{pageMode} Post</h1>
            <div className="form-row">
              <div className="form-field">
                Name:
              </div>
              <div className="form-input">
                <input
                  type="text"
                  name="author"
                  value={author}
                  onChange={this.handleInputChange.bind(this)}
                  placeholder="Enter Full Name.."
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                Title:
              </div>
              <div className="form-input">
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.handleInputChange.bind(this)}
                  placeholder="Enter Post Title.."
                />
              </div>
            </div>
            <div className='form-row'>
              <div className="form-field">
                Category:
              </div>
              <div className="select-category">
                <select
                  name="category"
                  value={category?category:'none'}
                  onChange={this.handleInputChange.bind(this)}>
                  <option disabled value="none">None</option>
                  <option value="react">React</option>
                  <option value="redux">Redux</option>
                  <option value="udacity">Udacity</option>
                </select>
              </div>
            </div>
            <div className="form-body">
              <textarea
                name="body"
                value={body}
                onChange={this.handleInputChange.bind(this)}/>
            </div>
            <div>
              <input type="submit" value="Submit"/>
            </div>
          </div>
        </form>
        {
          redirect && (
            <Redirect to="/" />
          )
        }
      </div>
    );
  }
}

const mapStateToProps = ({posts,comments},ownProps)=>{
  // const postID = ownProps.match.params.id;
  return {
    posts
  }
}

const mapDispatchToProps = dispatch => ({
  createNewPost:(post)=>dispatch(createNewPost(post)),
  editPost:(post)=>dispatch(editPost(post)),
  fetchPost:(id)=>dispatch(fetchPost(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(CreatePost);
