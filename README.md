## NC-News - Frontend

This is a repo for the React powered frontend application which serves news content from the [domh-nc-news Rest API](https://domh-be-nc-news.herokuapp.com/api/).

The Github repo to the backend API can be found [here](https://github.com/DominicH247/news-app).

Please visit (https://domh-nc-news.netlify.com/) for a complete working demo of the frontend application.

## Available functionality

The user can:

1. view a list of all posted articles
2. view a page for each topic with a list of related articles.
3. view an individual article.
4. view an individual article's comments.
5. sort articles by:
   - date created
   - comment_count
   - votes
6. post a new comment to an existing article (as a default logged in user).
7. delete own comments (as a default logged in user).
8. vote on an article and immediately see the change.
9. vote on a comment and immediately see the change.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

This application was created using React v16.12.0 on Node v13.7.0.

Clone the repo and install the required dependencies:

```
$ git clone https://github.com/DominicH247/domh-nc-news-frontend.git
$ cd PROJECT
$ npm install
```

## Start and watch

To start and watch the application in development mode :

```
$ npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Simple build for production

Bundles React in production mode and optimizes the build for the best performance.

```
$ npm run build
```

## Run tests

Launches the Jest test runner in the interactive watch mode. Which can be used for testing the util functions.

```
$ npm test-utils
```

## Update sources

Some packages usages might change so you should run npm prune & npm install often. A common way to update is by doing:

```
$ git pull
$ npm prune
$ npm install
```

Or you can you use the command:

```
$ npm run pull
```

## Languages and tools

### HTML

- HTML 5

### Javascript

- React for the UI
- Axios - HTTP client for making requests to the API
- Jest - util function testing

### CSS

- styled-components

## Version

This application is currently at version 0.1.0. For the versions available, see the [tags on this repository](https://github.com/DominicH247/news-app/releases).

## Authors

- **[Dominic Hui](https://github.com/DominicH247)**
