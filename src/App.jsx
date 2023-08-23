import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
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
      }
    ]
  }
])

function App() {
  return (
    // <RouterProvider routes={routes}/>
    <div>
        {/* <Home /> */}
      <Cities />
    </div>
  )
};

export default App;