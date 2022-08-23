import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import {getPropsAsync} from './features/propsearch/propsearchSlice'
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Connector from './features/connector/Connector';
import Propsearch from './features/propsearch/Propsearch';
import Property from './features/property/Property';
import Propspage from './features/propspage/Propspage';
import { getConsAsync } from './features/conlist/conlistSlice';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

store.dispatch(getPropsAsync())
store.dispatch(getConsAsync())

root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <App></App> */}
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="con/" element={<Connector/>} />
            <Route path="prs/" element={<Propsearch/>} />
            <Route path="addcon/" element={"addcon"} />
            <Route path="addprop/" element={"addprop"} />
            <Route path="prop/" element={<Propspage/>} >
              <Route path=":propId" element={<Property />} />
            </Route>
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  // </React.StrictMode>
);