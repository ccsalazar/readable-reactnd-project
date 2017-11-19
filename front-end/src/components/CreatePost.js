import React, { Component } from 'react';

class CreatePost extends Component {
  render(){
    return(
    <form action="POST">
      <div className="form-container">
        <h1>Create/Edit Post</h1>
        <div className="form-row">
          <div className="form-field">
            Name:
          </div>
          <div className="form-input">
            <input type="text" placeholder="Enter Full Name.."/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-field">
            Title:
          </div>
          <div className="form-input">
            <input type="text" placeholder="Enter Post Title.."/>
          </div>
        </div>
        <div className='form-row'>
          <div className="form-field">
            Category:
          </div>
          <div className="select-category">
            <select defaultValue="none" name="category">
              <option disabled value="none">None</option>
              <option value="react">React</option>
              <option value="react">Redux</option>
              <option value="react">Udacity</option>
            </select>
          </div>
        </div>
        <div className="form-body">
          <textarea name="body" cols="60" rows="20"></textarea>
        </div>
      </div>
    </form>
    );
  }
}

export default CreatePost;
