import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// *** pages ***
import HomePage from './pages/HomePage';

// signup
import SignupEmailPage from './pages/signup/SignupEmailPage';

// login

// acount

// entries

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup/email' element={<SignupEmailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
