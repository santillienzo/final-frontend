import {Footer, Home, NavBar,DetailProduct,Error404} from './components';
import {BrowserRouter as Router, Route, Routes as RoutesContainer} from "react-router-dom";

function App() {
    return (
        <Router>
            <div style={{minHeight: '100vh', display: 'grid', gridTemplateRows: 'auto 1fr auto'}}>
                <NavBar/>
                <RoutesContainer>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/product/:id" element={<DetailProduct />} />
                    <Route path="*" element={<Error404/>}/>
                </RoutesContainer>
                <Footer/>
            </div>


        </Router>
    );
}

export default App;
