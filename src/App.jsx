import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Analyze from './pages/Analyze';
import History from './pages/History';
import Login from './pages/Login';
import Register from './pages/Register';
import Connecter from './pages/Connecter';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="analyser" element={<Analyze />} />
      <Route path="history" element={<History />} />
      <Route path="connecter" element={<Connecter />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
)

function App({routes}) {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;