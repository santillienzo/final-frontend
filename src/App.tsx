import {Footer, Home, NavBar,} from './components';
import {BrowserRouter as Router, Route, Routes as RoutesContainer} from "react-router-dom";
import Product from "./components/views/Product";
import Error404 from "./components/views/Error404";

function App() {
    return (
        <Router>
            <div style={{minHeight: '100vh', display: 'grid', gridTemplateRows: 'auto 1fr auto'}}>
                <NavBar/>
                <RoutesContainer>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="*" element={<Error404/>}/>
                </RoutesContainer>
                <Footer/>
            </div>


        </Router>
    );
}

export default App;
