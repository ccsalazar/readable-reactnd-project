# Reddit Clone

An application built using React + Redux. This application follows the content and comment structure that is common throughout a large amount of websites and applications. I decided to model the styling similar to that of the dark themed reddit app. I primarily worked on the client side code while the server side code was provided by Udacity as part of the React Nanodegree.

### Project Demo

[Reddit Clone Demo](https://youtu.be/XUdssm4QRuo)

# Installation

### API Server

To install and start the API server, cd into the api-server directory and run the following commands:

`npm install` or `yarn`

once the dependencies have been installed, go ahead and run the server with the following command:

`node server`


### Front-End

After starting the API server, open a new terminal window and cd into the front-end directory. Run the following commands to launch the application:

`npm install`

`npm start`

or if you are using yarn you can run:

`yarn`

`yarn start`

### Built With

* [React](https://github.com/facebookincubator/create-react-app) docs can be found [here](https://reactjs.org/)
* [Redux](https://github.com/reactjs/react-redux) docs for usage with React can be found [here](https://redux.js.org/docs/basics/UsageWithReact.html)
* [React Router](https://github.com/ReactTraining/react-router) docs [here](https://reacttraining.com/react-router/)

### Acknowledgments

* Thank you to Udacity for providing the backend (api-server directory)


## Using The Server

### Include An Authorization Header

All requests should use an **Authorization header** to work with your own data:

```js
fetch(
    url,
    {
        headers: { 'Authorization': 'whatever-you-want' }
    }
)
```

### Comment Counts
Posts retrieved in a list or individually now contain comment counts in the format `post: { commentCount: 0 }`.  This should make it easier to display the number of comments a post has without having to call the comments endpoint for each post.   This count is updated whenever a comment is added or deleted via the `POST /comments` or `DELETE /comments/:id` endpoints.

### API Endpoint

The following endpoints are available:

| Endpoints       | Usage          | Params         |
|-----------------|----------------|----------------|
| `GET /categories` | Get all of the categories available for the app. List is found in `categories.js`. Feel free to extend this list as you desire. |  |
| `GET /:category/posts` | Get all of the posts for a particular category. |  |
| `GET /posts` | Get all of the posts. Useful for the main page when no category is selected. |  |
| `POST /posts` | Add a new post. | **id** - UUID should be fine, but any unique id will work <br> **timestamp** - [Timestamp] Can in whatever format you like, you can use `Date.now()` if you like. <br> **title** - [String] <br> **body** - [String] <br> **author** - [String] <br> **category** -  Any of the categories listed in `categories.js`. Feel free to extend this list as you desire. |
| `GET /posts/:id` | Get the details of a single post. | |
| `POST /posts/:id` | Used for voting on a post. | **option** - [String]: Either `"upVote"` or `"downVote"`. |
| `PUT /posts/:id` | Edit the details of an existing post. | **title** - [String] <br> **body** - [String] |
| `DELETE /posts/:id` | Sets the deleted flag for a post to 'true'. <br> Sets the parentDeleted flag for all child comments to 'true'. | |
| `GET /posts/:id/comments` | Get all the comments for a single post. | |
| `POST /comments` | Add a comment to a post. | **id** - Any unique ID. As with posts, UUID is probably the best here. <br> **timestamp** - [Timestamp] Get this however you want. <br> **body** - [String] <br> **author** - [String] <br> **parentId** - Should match a post id in the database. |
| `GET /comments/:id` | Get the details for a single comment. | |
| `POST /comments/:id` | Used for voting on a comment. | **option** - [String]: Either `"upVote"` or `"downVote"`.  |
| `PUT /comments/:id` | Edit the details of an existing comment. | **timestamp** - timestamp. Get this however you want. <br> **body** - [String] |
| `DELETE /comments/:id` | Sets a comment's deleted flag to `true`. | &nbsp; |
