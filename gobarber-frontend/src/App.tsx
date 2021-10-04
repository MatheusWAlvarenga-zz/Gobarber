// vendors
import React from 'react';

// components
import SignIn from './pages/Signin';
// import SignUp from './pages/Signup';
import { AuthProvider } from './hooks/AuthContext';

// style
import { GlobalStyle } from './styles/global';

const App: React.FC = () => (
  <>
    <AuthProvider>
      {/* <SignUp /> */}
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
