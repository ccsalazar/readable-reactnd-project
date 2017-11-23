import axios from "axios";

const headers = {headers: {'Authorization': 'whatever-you-want'}};

export const getALLPosts = () =>{
  const url = 'http://localhost:3001/posts';
  return axios.get(url,headers)
    .catch(error=>console.log('ERROR:',error))
    .then(response=>response.data);
  }


export const getPostsByCategory = (category) => {
  const url = `http://localhost:3001/${category}/posts`;
  return axios.get(url,headers)
      .catch(error=>console.log('ERROR:',error))
      .then(response=>console.log('Axios Here',response.data));
}
export const getPostsById = (id) => {
  const url = `http://localhost:3001/posts/${id}`;
  return axios.get(url,headers)
      .catch(error=>console.log('ERROR:',error))
      .then(response=>console.log('Axios Here',response.data));
}
export const getCommentsByPostID = (id) => {
  const url = `http://localhost:3001/posts/${id}/comments`;
  return axios.get(url,headers)
      .catch(error=>console.log('ERROR:',error))
      .then(response=>response.data);
}

export const getCommentDetails = (id) => {
  const url = `http://localhost:3001/comments/${id}`;
  return axios.get(url,headers)
      .catch(error=>console.log('ERROR:',error))
      .then(response=>console.log('Axios Here',response.data));
}

export const getCategories = (category) => {
  const url = `http://localhost:3001/categories`;
  return axios.get(url,headers)
      .catch(error=>console.log('ERROR:',error))
      .then(response=>console.log('Axios Here',response.data));
}
