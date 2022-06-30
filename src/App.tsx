import {Footer, Home, NavBar,DetailProduct,Error404,SignIn, SignUp} from './components';
import {BrowserRouter as Router, Route, Routes as RoutesContainer} from "react-router-dom";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme();


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
        <ThemeProvider theme={theme}>
            <Router>
                <div style={{minHeight: '100vh', display: 'grid', gridTemplateRows: 'auto 1fr auto'}}>
                    <NavBar/>
                    <DrawerHeader></DrawerHeader>
                    <RoutesContainer>
                        <Route path="/signin" element={<SignIn/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
                        <Route path="/product/:id" element={<DetailProduct />} />
                        <Route path="/" element={<Home/>}/>
                        <Route path="*" element={<Error404/>}/>
                    </RoutesContainer>
                    <Footer/>
                </div>


            </Router>
        </ThemeProvider>
    );
}

export default App;
