import { useEffect } from "react";
import ReactGA from "react-ga";

export const logPageview = (pageName) => ReactGA.pageview(pageName);

export const usePageTracking = (pageName) => {
  useEffect(() => {
    logPageview(pageName);
  }, [pageName]);
};