import NavBar from "./components/ui/navbar/NavBar"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home"
import Products from "./pages/products/Products"


const App = () => {
  return (
    <div>
      <NavBar />
      <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products">
          <Route index element={<Products />}/>
          {/* <Route path="" element={}/> */}
        </Route>
      </Routes>
      </div>
    </div>
  )
}

export default App