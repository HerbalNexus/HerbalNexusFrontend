import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Analyze from './pages/Analyze';
import History from './pages/History';
import Login from './pages/Login';
import Register from './pages/Register';
import Connecter from './pages/Connecter';
import Alert1 from './pages/Alert1';
import Alert2 from './pages/Alert2';
import Alert3 from './pages/Alert3';
import Alert4 from './pages/Alert4';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="analyser" element={<Analyze />} />
      <Route path="history" element={<History />} />
      <Route path="connecter" element={<Connecter />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="alerte1" element={<Alert1 />} />
      <Route path="alerte2" element={<Alert2 />} />
      <Route path="alerte3" element={<Alert3 />} />
      <Route path="alerte4" element={<Alert4 />} />
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