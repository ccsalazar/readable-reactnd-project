import axios from "axios";
import uuid from "uuid";

const headers = {
  headers: {
    'Content-Type':'application/json',
    'Authorization': 'whatever-you-want'
  }
};
const domain = 'http://localhost:3001';

//GET REQUEST
export const getALLPosts = () =>{
  const url = `${domain}/posts`;
  return axios.get(url,headers)
    .catch(error=>console.log('ERROR:',error))
    .then(response=>response.data);
  }

export const getPostsByCategory = (category) => {
  const url = `${domain}/${category}/posts`;
  return axios.get(url,headers)
      .catch(error=>console.log('ERROR:',error))
      .then(response=>console.log('Axios Here',response.data));
}
export const getPostsById = (id) => {
  const url = `${domain}/posts/${id}`;
  return axios.get(url,headers)
      .catch(error=>console.log('ERROR:',error))
      .then(response=>console.log('Axios Here',response.data));
}
export const getCommentsByPostID = (id) => {
  const url = `${domain}/posts/${id}/comments`;
  return axios.get(url,headers)
      .catch(error=>console.log('ERROR:',error))
      .then(response=>response.data);
}

export const getCommentDetails = (id) => {
  const url = `${domain}/comments/${id}`;
  return axios.get(url,headers)
      .catch(error=>console.log('ERROR:',error))
      .then(response=>console.log('Axios Here',response.data));
}

export const getCategories = (category) => {
  const url = `${domain}/categories`;
  return axios.get(url,headers)
      .catch(error=>console.log('ERROR:',error))
      .then(response=>console.log('Axios Here',response.data));
}

//POST REQUEST

export const addNewPost = (data) => {
  const url = `${domain}/posts`;
  data = {
    ...data,
    id:uuid(),
    timestamp:Date.now()
  }
  console.log("TEST DATA:",data)
  return axios.post(url,data,headers)
      .catch(error=>console.log('ERROR:',error))
      .then(response=>console.log('Axios Response',response));
}
