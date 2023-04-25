import React from 'react';



import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import Upload from './views/dashboard/Upload';



//import React from 'react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Upload />
    </BrowserRouter>
  </React.StrictMode>
);






