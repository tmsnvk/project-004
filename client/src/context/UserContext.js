import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userColorTheme, setUserColorTheme] = useState("darkYellow");
  const [gameData, setGameData] = useState({ gameStart: undefined, gameFinish: undefined, gameDeath: undefined });
  const [userData, setUserData] = useState({ token: undefined, user: undefined, id: undefined, createdAt: undefined });

  return (
    <UserContext.Provider value={{ userColorTheme, setUserColorTheme, gameData, setGameData, userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};