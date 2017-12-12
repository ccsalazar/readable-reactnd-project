import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import {createNewPost,editPost} from '../actions/posts';
import {fetchPost} from '../actions/posts';

class CreatePost extends Component {

  state = {
    post:{
      author: '',
      title:'',
      category:'none',
      body:'',
      id:''
    },
    redirect:false,
    mode:'',
    submitError:false
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
    if(this.state.mode==='edit'){
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
      });
    }
  }

  handleSubmit (e){
    e.preventDefault();
    const{createNewPost,editPost}=this.props;
    const {mode,post}=this.state;
    const {author,title,category,body}=this.state.post;
    if (author && title && category!=='none' && body){
      mode==='create'?createNewPost(post):editPost(post);
      this.setState({redirect:true});
    } else {
      this.setState({submitError:true});
    }
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
    console.log(this.state.post);
    const {redirect,mode,submitError}=this.state;
    const{author,title,category,body} = this.state.post;
    const pageMode = mode==='edit'?'Edit':'Create';
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-container">
            <h1>{pageMode} Post</h1>
            {
              submitError &&
                <h1>please complete all fields</h1>
            }
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
                  value={category}
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

CreatePost.propTypes = {
  posts:PropTypes.object.isRequired,
  fetchPost:PropTypes.func.isRequired,
  editPost:PropTypes.func.isRequired,
  createNewPost:PropTypes.func.isRequired
}

const mapStateToProps = ({posts,comments},ownProps)=>{
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
