import React,{Component} from 'react';
import {connect} from 'react-redux';

class AddComment extends Component{

state={
  modalIsOpen:false,
  comment:{
    id:'',
    timestamp:'',
    body:'',
    author:'',
    parentId:''
  }
}

  render(){

    console.log(this.props);

    return(
      <h1>add commen modal</h1>
    )
  }
}


const mapStateToProps = ({posts,comments})=>{
  const postsArr=Object.values(posts);
  return {
    postsArr
  }
}

export default connect(mapStateToProps)(AddCommentModal);
