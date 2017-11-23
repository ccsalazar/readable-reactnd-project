import axios from "axios";

const headers = {headers: {'Authorization': 'whatever-you-want'}};

function getALLPosts () {
  const url = 'http://localhost:3001/posts';
  axios.get(url,headers)
    .catch(error=>console.log('ERROR:',error))
    .then(response=>console.log('Axios Here',response.data));
}

function getPostsByCategory (category) {
  const url = `http://localhost:3001/${category}/posts`;
  axios.get(url,headers)
    .catch(error=>console.log('ERROR:',error))
    .then(response=>console.log('Axios Here',response.data));
}
function getPostsById (id) {
  const url = `http://localhost:3001/posts/${id}`;
  axios.get(url,headers)
    .catch(error=>console.log('ERROR:',error))
    .then(response=>console.log('Axios Here',response.data));
}
function getPostsComments (id) {
  const url = `http://localhost:3001/posts/${id}/comments`;
  axios.get(url,headers)
    .catch(error=>console.log('ERROR:',error))
    .then(response=>console.log('Axios Here',response.data));
}

function getCommentDetails (id) {
  const url = `http://localhost:3001/comments/${id}`;
  axios.get(url,headers)
    .catch(error=>console.log('ERROR:',error))
    .then(response=>console.log('Axios Here',response.data));
}

function getCategories (category) {
  const url = `http://localhost:3001/categories`;
  axios.get(url,headers)
    .catch(error=>console.log('ERROR:',error))
    .then(response=>console.log('Axios Here',response.data));
}




module.exports = {
  getALLPosts
}
