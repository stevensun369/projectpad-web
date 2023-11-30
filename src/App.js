import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// *** pages ***
import EditHomePage from './pages/EditHomePage';

// signup
import SignupEmailPage from './pages/signup/SignupEmailPage';
import SignupVerifyPage from './pages/signup/SignupVerifyPage';
import SignupBasicPage from './pages/signup/SignupBasicPage';


// login

// acount

// entries

function App() {
  console.log();

  return (
    <Router>
      <Routes>
        <Route path='/edit' element={<EditHomePage />} />
        <Route path='/signup/email' element={<SignupEmailPage />} />
        <Route path='/signup/verify' element={<SignupVerifyPage />} />
        <Route path='/signup/basic' element={<SignupBasicPage />} />

      </Routes>
    </Router>
  );
}

export default App;
