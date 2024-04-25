import React from 'react';
import ReactDOM from 'react-dom/client';
import Comp from './Comp/';
import Message from './Comp/Message';
import State from './Comp/State';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <State />
  </React.StrictMode>
);
