import { Home, NavBar } from './components';
import { BrowserRouter as Router, Route, Routes as RoutesContainer } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar/>
      <RoutesContainer>
        <Route path="/" element={<Home/>}/>

      </RoutesContainer>
    </Router>
  );
}

export default App;
