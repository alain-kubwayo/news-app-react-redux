# News App

This is an intermediate React-Redux project whose goal is to showcase news articles while making use of the [News API](https://newsapi.org)

## Project Requirements

### Technological Requirements:

1. All news publishers, news articles, article contents, article images and article titles mentioned in the requirements below should be fetched using the News API.
2. Use JavaScript ES6 features such as arrow functions, template literals, destructuring, let and const, classes, spread and rest operators.
3. Use promises and async/await to improve code readability and maintainability.
4. Use Redux to fetch and store the states of articles and sources.
5. Use a public github repository.
6. Deploy the application to Netlify.

### UX:

1. On the homepage, display the top 10 articles of the day. Don’t display the entire article. The article image and its title are enough.
2. Above, below or next to the top 10 articles, display a list of all news publishers that are available through the News API. (In the News API the news publishers are called “source”.)
3. When a user clicks on one of the top 10 articles, the application should display the full article.
4. When a user clicks on one of the news publishers, the application should display a page showing a list of articles from that publisher.
5. When a user clicks on one of the articles in that list, the application should display the full article.
6. The app should contain a search bar that allows users to search for articles based on keywords.

### UI:

1. Develop a responsive design that is compatible with all modern web browsers.
2. Beyond the UX specifications mentioned above, there are no detailed design-specifications for this app. You can decide on the design yourself. It does not need to be fancy. But it must make consistent use of fonts, colors and other visual elements and be well-aligned.

## Running the project locally:

In the directory where you want to save the project, run the following commands:

1. `git clone https://github.com/alain-kubwayo/news-app-react-redux.git .`
2. `npm install` to install all the project dependencies.
3. `npm start` to run the app in the development mode.
4. Open [http://localhost:3000](http://localhost:3000) to view the project in your browser.

Feel free to make some edits which will trigger the page reload for you to view changes live.
