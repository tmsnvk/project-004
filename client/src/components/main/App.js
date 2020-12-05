import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { UserContext } from "context/UserContext";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import { Navbar, PrivateRoute } from "components/main";
import { About, Achievements, AdventuresGameResultLose, AdventuresGameResultWin, AdventuresGameStart, AdventuresMainPage, AdventuresUnderConstruction, Home, PageNotFound, Register, Settings, SuccessfulUpdate, Terms } from "pages";
import { LoadingSpinner } from "components/shared/general";
import GlobalStyle from "utilities/theme/GlobalStyle";
import { colorTheme, propertyTheme, ScrollToTop } from "utilities";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAddressCard, faArchive, faCalendarCheck, faCalendarTimes, faChess, faChessKing, faChessPawn, faChessRook, faFireAlt, faInfinity, faLock, faMapSigns, faPeopleArrows, faPeopleCarry, faScroll, faSign, faSignOutAlt, faSkull, faStar, faSyncAlt, faToriiGate, faTrophy, faUnlock, faUserTie, faWrench } from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-regular-svg-icons";
library.add(faAddressCard, faArchive, faCalendarCheck, faCalendarTimes, faChess, faChessKing, faChessPawn, faChessRook, faFireAlt, faInfinity, faLock, faMapSigns, faPeopleArrows, faPeopleCarry, faScroll, faSign, faSignOutAlt, faSkull, faStar, faSyncAlt, faToriiGate, faTrophy, faUnlock, faUserTie, faWrench);

const App = () => {
  const { userColorTheme, setUserColorTheme, setGameData, setUserData } = useContext(UserContext);
  const [initialGlobalStateLoader, setInitialGlobalStateLoader] = useState(false);

  const activeColorTheme = colorTheme[userColorTheme];

  useEffect(() => {
    const handleLogin = async () => {
      const tokenResponse = await axios.post("/user/token-validity");

      if (!tokenResponse.data.message.status) {
        return null;
      } else {
        try {
          setInitialGlobalStateLoader(true);

          const userResponse = await axios.get("/user");
          setUserData({ user: userResponse.data.username, createdAt: userResponse.data.createdAt });

          const achievementResponse = await axios.get("/achievement/store");
          setGameData({ gameStart: achievementResponse.data.gameStart, gameFinish: achievementResponse.data.gameFinish, gameDeath: achievementResponse.data.gameDeath });

          const themeResponse = await axios.get("/user/theme-get");
          setUserColorTheme(themeResponse.data);

          setInitialGlobalStateLoader(false);
        } catch (error) {
          console.log(error);
        }
      }
    };

    handleLogin();
  }, [setInitialGlobalStateLoader, setGameData, setUserColorTheme, setUserData]);

  return (
    <Router>
      <ThemeProvider theme={activeColorTheme}>
        <ThemeProvider theme={propertyTheme}>
          <GlobalStyle />
          <ScrollToTop />
          <Navbar />
          <Switch>
            {initialGlobalStateLoader ? <LoadingSpinner loadingMessage="The librarians are retriving the requested data from The Tower Archives..." /> : null}
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