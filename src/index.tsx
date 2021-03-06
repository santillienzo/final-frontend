import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContextProvider } from './context/CartContext'

import "swiper/css/bundle";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <CartContextProvider>
            <App/>
        </CartContextProvider>
    </React.StrictMode>
);

