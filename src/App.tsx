import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import { LoginPage } from './pages/login/index'
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={ <LoginPage />} />
    </Routes>
  </Router>
  );
}

export default App;
