import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "context/UserContext";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import axios from "axios";
import { LoadingSpinner } from "components/commoncomponents/general";
import { About, Achievements, AdventuresGameResultLose, AdventuresGameResultWin, AdventuresGameStart, AdventuresMainPage, AdventuresUnderConstruction, Home, PageNotFound, Register, Settings, SuccessfulUpdate, Terms } from "layouts";
import { Navbar, PrivateRoute } from "components/maincomponents";
import ScrollToTop from "utilities/scrollToTop";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAddressCard, faArchive, faCalendarCheck, faCalendarTimes, faChess, faChessKing, faChessPawn, faChessRook, faCog, faFireAlt, faInfinity, faLock, faMapSigns, faPeopleArrows, faPeopleCarry, faScroll, faSign, faSignOutAlt, faSkull, faStar, faToriiGate, faTrophy, faUnlock, faUserTie, faWrench } from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-regular-svg-icons";
library.add(faAddressCard, faArchive, faCalendarCheck, faCalendarTimes, faChess, faChessKing, faChessPawn, faChessRook, faCog, faFireAlt, faInfinity, faLock, faMapSigns, faPeopleArrows, faPeopleCarry, faScroll, faSign, faSignOutAlt, faSkull, faStar, faToriiGate, faTrophy, faUnlock, faUserTie, faWrench);

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
    secondary: "#ffd479f5", // yellow
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
    medium: "1.6rem", // 16px
    large: "2rem", // 20px
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
      if (token === "") return;

      if (token !== "") setInitialGlobalStateLoader(true);

      const response = await axios.post("/user/token-validity", null, { headers: {"x-auth-token": token }});
      if (response.data.message.status) {
        const userResponse = await axios.get("/user", { headers: { "x-auth-token": token }});
        setUserData({ token, user: userResponse.data.username, id: userResponse.data.id, createdAt: userResponse.data.createdAt });
        setInitialGlobalStateLoader(false);
      }
    };

    handleLogin();
  }, [setInitialGlobalStateLoader, setUserData]);

  useEffect(() => {
    const id = localStorage.getItem("auth-id");
    if (id === null || id === "") return;

    const source = axios.CancelToken.source();

    const getGlobalAchievements = async () => {
      try {
        const response = await axios.get("/achievement/store", { params: { _id: id }, cancelToken: source.token });
        setGameData({ gameStart: response.data.gameStart, gameFinish: response.data.gameFinish, gameDeath: response.data.gameDeath });
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log(error);
        } else {
          throw error;
        }
      }
    };

    getGlobalAchievements();
    return () => {
      source.cancel();
      setGameData({ gameStart: 0, gameFinish: 0, gameDeath: 0 });
    } 
  }, [setGameData]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Switch>
          {initialGlobalStateLoader ? <LoadingSpinner message="The caretakers are retriving the data from the archives..." /> : null}
          <Route path="/page/home" component={Home} />
          <Route path="/page/register" component={Register} />
          <PrivateRoute exact path="/page/adventures" component={AdventuresMainPage} />
          <PrivateRoute exact path="/page/adventures/result/win" component={AdventuresGameResultWin} />
          <PrivateRoute exact path="/page/adventures/result/lose" component={AdventuresGameResultLose} />
          <PrivateRoute exact path="/page/adventures/underconstruction" component={AdventuresUnderConstruction} />
          <PrivateRoute path="/page/adventures/:storytitle" component={AdventuresGameStart} />
          <PrivateRoute path="/page/achievements" component={Achievements} />
          <PrivateRoute path="/page/settings" component={Settings} />
          <PrivateRoute path="/page/success" component={SuccessfulUpdate} />
          <Route path="/page/about" component={About} />
          <Route path="/page/terms" component={Terms} />
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