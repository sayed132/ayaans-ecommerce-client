import { RouterProvider } from "react-router-dom"
import router from "./Router/router"

function App() {

  return (
    <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router}></RouterProvider>
    {/* <Toaster></Toaster> */}
  </div>
  )
}

export default App
