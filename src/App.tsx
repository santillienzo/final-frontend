import {Footer, Home, NavBar,} from './components';
import Cards from './components/layout/Card/Cards';
import {BrowserRouter as Router, Route, Routes as RoutesContainer} from "react-router-dom";

function App() {
    return (
        <Router>
            <div style={{minHeight: '100vh', display: 'grid', gridTemplateRows: 'auto 1fr auto'}}>
                <NavBar/>
                <RoutesContainer>
                    <Route path="/" element={<Home/>}/>
                </RoutesContainer>
                <Cards/>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
