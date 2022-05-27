import React from 'react';
import ReactDOM from 'react-dom/client';
// router-dom 
import { BrowserRouter } from "react-router-dom";
// bootstrap 
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
// css 
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

