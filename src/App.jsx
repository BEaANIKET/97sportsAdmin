import React, { useContext } from 'react';

import LoginPage from './screens/LoginPage';
import HomeScreen from './screens/HomeScreen';
import { AuthContext } from './services/auth/auth.context';

const App = () => {
   const {isAuthenticated , user } = useContext(AuthContext);
  
   

  return isAuthenticated ? <HomeScreen /> : <LoginPage />;
};

export default App;