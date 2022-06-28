import {Footer, Home, NavBar,DetailProduct,Error404, PayOrder} from './components';
import {BrowserRouter as Router, Route, Routes as RoutesContainer} from "react-router-dom";
import { styled } from '@mui/material/styles';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

function App() {
    return (
        <Router>
            <div style={{minHeight: '100vh', display: 'grid', gridTemplateRows: 'auto 1fr auto'}}>
                <div>
                    <NavBar/>
                    <DrawerHeader></DrawerHeader>
                </div>
                <RoutesContainer>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/product/:id" element={<DetailProduct />} />
                    <Route path="/pay_order" element={<PayOrder />} />
                    <Route path="*" element={<Error404/>}/>
                </RoutesContainer>
                <Footer/>
            </div>


        </Router>
    );
}

export default App;
