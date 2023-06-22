import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import { GoogleOAuthProvider } from '@react-oauth/google';
import MainScreen from './Screens/MainScreen/MainScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
        <GoogleOAuthProvider clientId="866216253861-buq5dgbvaa4nefc5ujih47gqsfs3oo2o.apps.googleusercontent.com">
          <LoginScreen />
        </GoogleOAuthProvider>} />
        <Route path='/main' element={<MainScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
