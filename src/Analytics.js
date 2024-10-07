import { useEffect } from 'react';
import ReactGA from 'react-ga';

export const useGoogleAnalytics = () => {
    useEffect(() => {
        // Initialize Google Analytics
        ReactGA.initialize('YOUR_GA_TRACKING_ID'); // TODO Provide a relevant tracking ID here

        // Record initial pageview
        ReactGA.pageview(window.location.pathname + window.location.search);

        // Set up listener for route changes (if using React Router)
        const handleRouteChange = (url) => {
            ReactGA.pageview(url);
        };

        // Clean up listener on component unmount
        return () => {
            // Remove route change listener if set up
        };
    }, []);
};