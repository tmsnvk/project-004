import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

export const useNavigationTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_KEY);
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
};