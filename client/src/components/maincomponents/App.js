import React, { useEffect, useState } from "react";
import UserContext from "context/UserContext";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import axios from "axios";
import { About, Adventures, Home, PageNotFound, Profile, Register } from "layouts";
import { Navbar, PrivateRoute } from "components/maincomponents";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAddressCard, faChessRook, faInfinity, faMapSigns, faSignOutAlt, faToriiGate, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faDotCircle } from "@fortawesome/free-regular-svg-icons";
library.add(faAddressCard, faChessRook, faDotCircle, faInfinity, faMapSigns, faSignOutAlt, faToriiGate, faUserTie);

const theme = {
  fontColor: {
    main: "#ffd479", // yellow
    secondaryDark: "#2d2d2d", // almost black
    secondaryLight: "#777c85", // medium gray
    alternate: "#6ab0f3", // blue
    warning: "#f2777a" // red
  },
  backgroundColor: {
    mainDark: "#2d2d2d", // almost black
    mainLight: "#777c85", // medium gray
    secondary: "#ffd479", // yellow
    alternate: "#6ab0f3", // blue
  },
  shadowColor: {
    main: "#424242" // almost black
  },
  fontFamily: {
    main: `"Roboto", sans-serif`,
    secondary: `"Open Sans", sans-serif`
  },
  fontSize: {
    default: "0.625rem", // 10px
    small: "1.25rem", // 18px
    medium: "1.5rem", // 24px
    large: "1.875rem", // 30px
    xLarge: "2.25rem", // 36px
    xxLarge: "2.625rem" // 42px
  },
  mediaQueries: {
    xSmall: "320px",
    small: "480px",
    medium: "768px",
    large: "992px",
    xLarge: "1200px"
  }
};

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    color: ${props => props.theme.fontColor.main};
    background-color: ${props => props.theme.backgroundColor.mainDark};
    font-family: ${props => props.theme.fontFamily.main};
    font-size: 62.5%;
    line-height: 1.5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }
`;

// ReactGA.initialize(process.env.REACT_APP_GA_KEY);
// ReactGA.pageview("/");

const App = () => {
  const [userData, setUserData] = useState({ token: undefined, user: undefined });

  useEffect(() => {
    const handleLogin = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      const response = await axios.post("/users/tokenIsValid", null, { headers: {"x-auth-token": token }});
      if (response.data) {
        const userResponse = await axios.get("/users", { headers: { "x-auth-token": token }});
        setUserData({ token, user: userResponse.data });
      }
    };

    handleLogin();
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserContext.Provider value={{ userData, setUserData }}>
        <Navbar />
        <Switch>
          <Route path="/page/home" component={Home} />
          <Route path="/page/register" component={Register} />
          <PrivateRoute path="/page/adventures" component={Adventures} />
          <PrivateRoute path="/page/profile" component={Profile} />
          <Route path="/page/about" component={About} />
          <Redirect exact path="/" to="/page/home" />
          <Route component={PageNotFound} />
        </Switch>
      </UserContext.Provider>
      </ThemeProvider>
    </Router>
  );
};

export default App;

// Background	Darkest	#2d2d2d
// Comment	Medium	#777c85
// Foreground	Light	#b3b9c5
// Function	Lightest	#ffffff
// Variable	Red	#f2777a
// Number	Orange	#fca369
// Attribute	Yellow	#ffd479
// Keyword	Light Yellow	#ffeea6
// String	Green	##92d192
// Class/Tag	Blue	#6AB0F3
// Constant/Pseudo	Aqua	#76d4d6
// Support	Purple	#e1a6f2
// Operator	Beige	#ac8d58

