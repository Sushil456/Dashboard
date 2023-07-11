import { Home } from "./Pages/Home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./Pages/Login/Login"
import { List } from "./Pages/List/List"
import { Single } from "./Pages/Single/Single"
import { New } from "./Pages/New/New"
export const App = () =>{
  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login/>} />
            {/* Users route  */}
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>} />
              <Route path="new" element={<New/>} />
            </Route>
            {/* Products Route  */}
            <Route path="products">
              <Route index element={<List/>}/>
              <Route path=":productId" element={<Single/>} />
              <Route path="new" element={<New/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
