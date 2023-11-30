import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// *** pages ***
import HomePage from './pages/HomePage';

// signup
import SignupEmailPage from './pages/signup/SignupEmailPage';
import SignupVerifyPage from './pages/signup/SignupVerifyPage';
import SignupBasicPage from './pages/signup/SignupBasicPage';

// login
import LoginEmailPage from './pages/login/LoginEmailPage';
import LoginVerifyPage from './pages/login/LoginVerifyPage';
import LoginPasswordPage from './pages/login/LoginPasswordPage';
import ProfilePage from './pages/profile/ProfilePage';

// acount

// entries

function App() {
  console.log();

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/signup/email' element={<SignupEmailPage />} />
        <Route path='/signup/verify' element={<SignupVerifyPage />} />
        <Route path='/signup/basic' element={<SignupBasicPage />} />

        <Route path='/login/email' element={<LoginEmailPage />} />
        <Route path='/login/verify' element={<LoginVerifyPage />} />
        <Route path='/login/password' element={<LoginPasswordPage />} />

        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
