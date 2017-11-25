import React, { Component } from 'react';
import * as ServerAPIUtil from '../utils/api';
import {Redirect,withRouter} from 'react-router';
import {connect} from 'react-redux';

class CreatePost extends Component {

  state = {
    author: '',
    title:'',
    category:'',
    body:'',
    redirect:false
  }

  handleSubmit (e){
    e.preventDefault();
    ServerAPIUtil.addNewPost(this.state).then(posts=>console.log('Response In Component',posts));
    this.setState({redirect:true});
  }
  handleInputChange(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  render(){
    const {redirect}=this.state;
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-container">
            <h1>Create/Edit Post</h1>
            <div className="form-row">
              <div className="form-field">
                Name:
              </div>
              <div className="form-input">
                <input
                  type="text"
                  name="author"
                  value={this.state.author}
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
                  value={this.state.title}
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
                  value={this.state.category?this.state.category:'none'}
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
                value={this.state.body}
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

const mapStateToProps = ({posts,comments})=>{
  return {
    posts,
    comments
  }
}


export default withRouter(connect(mapStateToProps)(CreatePost));
