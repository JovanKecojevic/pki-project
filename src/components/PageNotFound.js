import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginPage from "../pages/LoginPage";

/**
 * Redirects to /courier-analysis if requested url does not exists
 *
 * @returns {JSX.Element} - called when page is not found
 * @component
 * @alias PageNotFound
 * @category App
 */
export default function PageNotFound() {
  const history = useHistory();

  window.setTimeout(() => {
    history.push('/');
  }, 1000);

  return <LoginPage />;
}
