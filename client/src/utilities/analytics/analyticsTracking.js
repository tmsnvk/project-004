import { useEffect } from "react";
import ReactGA from "react-ga";

export const makePageView = (pageName) => ReactGA.pageview(pageName);

export const usePageTracking = (pageName) => {
  useEffect(() => {
    makePageView(pageName);
  }, [pageName]);
};