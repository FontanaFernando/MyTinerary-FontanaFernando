import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import CardDetail from "./pages/CardDetail/CardDetail";
import Cities from "./pages/Cities/Cities";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/Cities',
        element: <Cities />
      },
      {
        path: '/CardDetail',
        element: <CardDetail />
      }
    ]
    }
])

function App() {
  return (
    <RouterProvider router={routes} />
  )
};

export default App;