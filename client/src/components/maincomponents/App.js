import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "context/UserContext";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { colorTheme, propertyTheme, ScrollToTop } from "utilities";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import axios from "axios";
import { LoadingSpinner } from "components/commoncomponents/general";
import { Navbar, PrivateRoute } from "components/maincomponents";
import { About, Achievements, AdventuresGameResultLose, AdventuresGameResultWin, AdventuresGameStart, AdventuresMainPage, AdventuresUnderConstruction, Home, PageNotFound, Register, Settings, SuccessfulUpdate, Terms } from "layouts";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAddressCard, faArchive, faCalendarCheck, faCalendarTimes, faChess, faChessKing, faChessPawn, faChessRook, faCog, faFireAlt, faInfinity, faLock, faMapSigns, faPeopleArrows, faPeopleCarry, faScroll, faSign, faSignOutAlt, faSkull, faStar, faToriiGate, faTrophy, faUnlock, faUserTie, faWrench } from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-regular-svg-icons";
library.add(faAddressCard, faArchive, faCalendarCheck, faCalendarTimes, faChess, faChessKing, faChessPawn, faChessRook, faCog, faFireAlt, faInfinity, faLock, faMapSigns, faPeopleArrows, faPeopleCarry, faScroll, faSign, faSignOutAlt, faSkull, faStar, faToriiGate, faTrophy, faUnlock, faUserTie, faWrench);

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
    color: ${({ theme }) => theme.main};
    background-color: ${({ theme }) => theme.secondaryDark};
    font-family: ${({ theme }) => theme.fontFamily.main};
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
  const [themeMode, setThemeMode] = useState("darkTheme");

  const activeColorTheme = colorTheme[themeMode];

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

  const toggleTheme = () => themeMode === "dark" ? setThemeMode("darkTheme") : setThemeMode("lightTheme");

  return (
    <Router>
      <ThemeProvider theme={activeColorTheme}>
        <ThemeProvider theme={propertyTheme}>
          <GlobalStyle />
          <ScrollToTop />
          <Navbar toggleTheme={toggleTheme} />
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
      </ThemeProvider>
    </Router>
  );
};

export default App;