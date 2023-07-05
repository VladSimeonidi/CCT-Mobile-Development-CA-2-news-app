# news-app

# Prerequisites

**Node.js:** (^16.14.0 || ^18.10.0)
**@angular/cli":** ("^16.0.0)"
**RXJS:** (^6.5.3 || ^7.4.0)

# Getting Started

1. Clone the repository
2. Navigate to the project directory
3. Install the project dependencies: **npm install**
4. Start a local dev server for app dev/testing: **ionic serve [options]**
5. Build web assets and prepare your app for any platform targets : **ionic build --prod**

# Project Structure

- **src/:** Contains the source code for the app, including HTML templates, CSS stylesheets, and JavaScript files.
- **src/app/:** Contains the main application code, including components, services, and other related files.
- **src/assets/:** Contains static assets such as images, icons, and fonts.
- **src/app/news/:** Contains modules, models, services and componsnts for tabs
- **src/app/news/shared:** Contains modules and componsnts (news cards module and pagination module) that can be shared between tabs
- **src/app/not-found:** Contains module for not found page

# Description

The app consists of three main tabs: Business, General, and Headlines. Each tab makes request to gather relevant news articles for the users. The app also includes a logo, a Favorites tab for saving articles, a Not Found page, and a link button to the homepage. Additionally, the app provides services for making API requests for news articles and managing posts in the Favorites section.
Features and Functionality:

**1 Tabs:**

Business Tab: This tab displays news articles related to business topics. It makes a request to retrieve the latest business news and presents it to the users in a user-friendly format.
General Tab: The General tab provides a broader range of news articles covering various topics like sports, entertainment, technology, and more. It fetches news from different categories and ensures a diverse news selection.

Headlines Tab: The Headlines tab focuses on displaying the most important and trending news articles. It fetches the top headlines and highlights them for the users.
The app features a logo, which serves as a visual representation of the brand or the app itself. The logo helps in creating brand identity and recognition among the users.

The Favorites tab allows users to save articles they find interesting or want to revisit later. It provides a convenient way for users to manage their saved articles and access them easily.

**2 Adding and Deleting Posts in Favorites:**

Users can add posts to their Favorites by selecting the desired articles and utilizing the app's functionality to save them. Conversely, users can also remove posts from their Favorites if they no longer wish to keep them.

**3. API Services. The app offers the following services to support its functionality:**
   
Post API Requests:

The app makes API requests to retrieve news articles based on the selected tab. These requests ensure that users receive up-to-date and relevant news content.

Adding Posts to Favorites:

The app provides a service to add posts to the Favorites tab. This service allows users to save their preferred articles for future reference.
