import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "context/UserContext";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import axios from "axios";
import { LoadingSpinner } from "components/commoncomponents/general";
import { About, Achievements, Adventures, GameResults, GameStart, Home, PageNotFound, Register, Settings, UnderConstruction } from "layouts";
import { Navbar, PrivateRoute } from "components/maincomponents";
import ScrollToTop from "utilities/scrollToTop";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAddressCard, faChessKing, faChessRook, faCog, faDragon, faInfinity, faMapSigns, faMountain, faScroll, faSign, faSignOutAlt, faStar, faToriiGate, faTrophy, faUserTie, faWrench } from "@fortawesome/free-solid-svg-icons";
import { faDotCircle } from "@fortawesome/free-regular-svg-icons";
library.add(faAddressCard, faChessKing, faChessRook, faCog, faDotCircle, faDragon, faInfinity, faMapSigns, faMountain, faScroll, faSign, faSignOutAlt, faStar, faToriiGate, faTrophy, faUserTie, faWrench);

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
    warning: "#f2777a" // red
  },
  shadowColor: {
    main: "#424242" // almost black
  },
  fontFamily: {
    main: `"Roboto", sans-serif`,
    secondary: "Montserrat"
  },
  fontSize: {
    default: "1rem", // 10px
    small: "1.4rem", // 14px
    medium: "1.8rem", // 18px
    large: "2.2rem", // 22px
    xLarge: "2.6rem", // 26px
    xxLarge: "3rem" // 30px
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
  const { setUserData, setGameData } = useContext(UserContext);
  const [initialGlobalStateLoader, setInitialGlobalStateLoader] = useState(false);

  useEffect(() => {
    const handleLogin = async () => {
      let token = localStorage.getItem("auth-token");

      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      if (token !== "") setInitialGlobalStateLoader(true);

      const response = await axios.post("/users/tokenIsValid", null, { headers: {"x-auth-token": token }});
      if (response.data) {
        const userResponse = await axios.get("/users", { headers: { "x-auth-token": token }});
        setUserData({ token, user: userResponse.data.loginName, id: userResponse.data.id });
        setInitialGlobalStateLoader(false);
      }
    };

    handleLogin();
  }, [setInitialGlobalStateLoader, setUserData]);

  useEffect(() => {
    const id = localStorage.getItem("auth-id");
    const source = axios.CancelToken.source();

    const getNumberOfDeath = async () => {
      try {
        const response = await axios.get("/users/achievements/death", { params: { _id: id }, cancelToken: source.token });
        setGameData({ death: response.data });
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log(error);
        } else {
          throw error;
        }
      }
    };

    getNumberOfDeath();
    return () => source.cancel() && setGameData({ death: 0 });
  }, [setGameData]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Switch>
          {initialGlobalStateLoader ? <LoadingSpinner message="The dragons are getting tea..." /> : null}
          <Route path="/page/home" component={Home} />
          <Route path="/page/register" component={Register} />
          <PrivateRoute exact path="/page/adventures" component={Adventures} />
          <PrivateRoute exact path="/page/adventures/results" component={GameResults} />
          <PrivateRoute exact path="/page/adventures/underconstruction" component={UnderConstruction} />
          <PrivateRoute path="/page/adventures/:storytitle" component={GameStart} />
          <PrivateRoute path="/page/achievements" component={Achievements} />
          <PrivateRoute path="/page/settings" component={Settings} />
          <Route path="/page/about" component={About} />
          <Redirect exact path="/" to="/page/home" />
          <Route component={PageNotFound} />
        </Switch>
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