import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./store";
import 'semantic-ui-css/semantic.min.css'
import {createBrowserRouter, HashRouter, RouterProvider} from "react-router-dom";
import PostPage from "./components/post";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/post',
        element: <PostPage/>
    },
    {
        path: '*',
        element: <h1>Not found</h1>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <HashRouter>
        <RouterProvider router={router}/>
      </HashRouter>
  </Provider>
);