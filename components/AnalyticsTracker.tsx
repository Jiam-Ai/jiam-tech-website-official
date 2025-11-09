import React, { useEffect } from 'react';
// FIX: Replaced namespace import for 'react-router-dom' with a named import for 'useLocation' to resolve hook access errors.
import { useLocation } from 'react-router-dom';
import { pageview } from '../services/analytics';

const AnalyticsTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Send a pageview event to the analytics service on every route change
    pageview(location.pathname + location.search);
  }, [location]);

  return null;
};

export default AnalyticsTracker;