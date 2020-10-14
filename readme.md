### evrallas || project-004 || tmsnvk
#### description


#### used packages
```
BACKEND
+ axios                - making api calls.
+ bcryptjs             - .
+ cors                 - cors enabling middleware.
+ dotenv               - loading an .env variable to store not-public configuration data.
+ express              - server framework.
+ helmet               - securing express.
+ jsonwebtoken
+ mongoose

FRONTEND
+ axios                - making api calls.
+ fontawesome          - .
+ react                - front-end framework.
+ react-ga             - google analytics package.
+ react-router-dom     - routing.
+ styled-components    - css-in-js styling.
```

#### project structure
```
*
|- .env_sample
|- .gitignore
|- license.md
|- package-lock.json
|- package.json
|- readme.md
|- screenshot.png
|- server.js
|- CLIENT
  |- .gitignore
  |- jsconfig.json
  |- package-lock.json
  |- package.json
  |- PUBLIC
    |- favicon.ico
    |- index.html
  |- SRC
    |- index.js
    |- COMPONENTS
      |- COMMONCOMPONENTS
      |- LAYOUTCOMPONENTS
        |- HOME
          |- index.js
          |- FORMLOGIN
            |- index.js
            |- FormLogin.js
          |- LOGGEDINTEXT
            |- index.js
            |- LoggedInText.js
          |- LOGGEDOUTTEXT
            |- index.js
            |- LoggedOutText.js
          |- PAGETOPTEXT
            |- MESSAGE
              |- index.js
              |- Message.js
            |- TITLE
              |- index.js
              |- Title.js
            |- index.js
            |- PageTopText.js
      |- MAINCOMPONENTS
        |- App.js
        |- index.js
        |- NAVBAR
          |- index.js
          |- Navbar.js
        |- PRIVATEROUTE
          |- index.js
          |- PrivateRoute.js
    |- CONTEXT
      |- UserContext.js
    |- LAYOUTS
      |- About.js
      |- Achievements.js
      |- Adventures.js
      |- GamesResults.js
      |- GameStart.js
      |- Home.js
      |- index.js
      |- PageNotFound.js
      |- Register.js
      |- Settings.js
      |- UnderConstruction.js
    |- STORIES
      |- ARCFOUR
        |- storyOne.js
      |- ARCONE
        |- storyOne.js
        |- storyTwo.js
      |- ARCTHREE
        |- storyOne.js
      |- ARCTWO
        |- storyOne.js
    |- UTILITIES
      |- ICONLIST
        |- iconList.js
        |- index.js
      |- SCROLLTOTOP
        |- index.js
        |- scrollToTop.js
|- MIDDLEWARE
  |- auth.js
|- MODELS
  |- userModel.js
|- ROUTES
  |- userRoute.js
```

#### screenshot
![Screenshot](screenshot.png)