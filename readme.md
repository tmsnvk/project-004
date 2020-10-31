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
        |- FORM-RELATED
          |- index.js
          |- CHARACTERCOUNTER
            |- CharacterCounter.js
            |- index.js
          |- ERRORMESSAGE
            |- ErrorMessage.js
            |- index.js
          |- ERRORMESSAGEWRAPPER
            |- ErrorMessageWrapper.js
            |- index.js
          |- FORM
            |- Form.js
            |- index.js
          |- FORMWRAPPER
            |- FormWrapper.js
            |- index.js
          |- INPUT
            |- index.js
            |- Input.js
          |- INPUTHELPERWRAPPER
            |- index.js
            |- InputHelperWrapper.js
          |- LABEL
            |- index.js
            |- Label.js
          |- SUBMIT
            |- index.js
            |- Submit.js
          |- TEXTAREA
            |- index.js
            |- Textarea.js
          |- TOGGLEPASSWORD
            |- index.js
            |- TogglePassword.js
        |- GENERAL
          |- index.js
          |- HORIZONTALLINE
            |- HorizontalLine.js
            |- index.js
          |- LAYOUTCONTAINER
            |- index.js
            |- LayoutContainer.js
          |- LOADINGSPINNER
            |- index.js
            |- LoadingSpinner.js
          |- MESSAGETEXT
            |- index.js
            |- MessageText.js
          |- MESSAGETITLE
            |- index.js
            |- MessageTitle.js
          |- SPANBOLD
            |- index.js
            |- SpanBold.js
        |- NAVIGATION-RELATED
        |- STYLED-ICONS
        |- TILE-RELATED
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
      |- AdventuresGameResultLose.js
      |- AdventuresGameResultWin.js
      |- AdventuresGameStart.js
      |- AdventuresMainPage.js
      |- Home.js
      |- index.js
      |- PageNotFound.js
      |- Register.js
      |- Settings.js
      |- SuccessfulUpdate.js
      |- UnderConstruction.js
      |- Terms.js
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
      |- index.js
      |- ADVENTURESMETADATA
        |- adventuresMetaData.js
        |- index.js
      |- ICONLIST
        |- iconList.js
        |- index.js
      |- SCROLLTOTOP
        |- index.js
        |- scrollToTop.js
      |- STORIES
        |- arcOneStoryOne.json
      |- THEME
        |- colorTheme.js
        |- index.js
        |- propertyTheme.js
|- MIDDLEWARE
  |- auth.js
|- MODELS
  |- userModel.js
|- MONGODB
  |- database.js
|- ROUTES
  |- ACHIEVEMENT
    |- counter-death.js
    |- counter-start.js
    |- index.js
    |- showcase.js
    |- store.js
    |- trigger.js
  |- ADVENTURE
    |- index.js
    |- nextevent.js
    |- savedgameid-get.js
    |- savedgameid-set.js
  |- CONTACT
    |- form-msg-from-evrallas.js
    |- form-msg-to-evrallas.js
    |- index.js
  |- USER
    |- change-name.js
    |- change-password.js
    |- delete.js
    |- index.js
    |- login.js
    |- register.js
    |- root.js
    |- theme-get.js
    |- theme-set.js
    |- token-validity.js
```

#### screenshot
![Screenshot](screenshot.png)