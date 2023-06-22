import LoginScreen from './Screens/LoginScreen/LoginScreen';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId="866216253861-buq5dgbvaa4nefc5ujih47gqsfs3oo2o.apps.googleusercontent.com">
      <LoginScreen />
    </GoogleOAuthProvider>
  );
}

export default App;
