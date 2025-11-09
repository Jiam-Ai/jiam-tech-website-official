import React, { useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { pageview } from '../services/analytics';

const AnalyticsTracker: React.FC = () => {
  const location = ReactRouterDOM.useLocation();

  useEffect(() => {
    // Send a pageview event to the analytics service on every route change
    pageview(location.pathname + location.search);
  }, [location]);

  return null;
};

export default AnalyticsTracker;