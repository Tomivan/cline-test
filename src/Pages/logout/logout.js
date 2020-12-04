import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { navigate } from '@reach/router';
import './logout.css'

const clientId =
  '786757047023-lv7l14nsf8lmimcbllom4jb33vnfjv68.apps.googleusercontent.com';

function Logout() {
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    navigate(`/`)
    alert('Logged out Successfully ✌');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="logout-button">
      <span className="buttonText">Sign out</span>
    </button>
  );
}

export default Logout;