import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'
import AddNewCandidatContextProvider from './store/CandidatContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AddNewCandidatContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AddNewCandidatContextProvider>
);

