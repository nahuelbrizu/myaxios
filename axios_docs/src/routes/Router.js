import React from "react"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from "../components/containers/App";
import NavBar from "../components/containers/NavBar";
import Lista from "../components/containers/Lista";
import PostRecipes from "../components/axios/PostRecipes";
import PostUser from "../components/axios/PostUser";

const Router = () => {
  return(
      <BrowserRouter>
            <NavBar />
                <Routes >
                  <Route exact path="/Lista" element={<Lista />} />
                  <Route exact path="/App" element={<App/>} />
                  <Route exact path="/PostRecipes"  element={<PostRecipes/>}/>
                    <Route exact path="/PostUser"  element={<PostUser/>}/>
                    <Route exact path="/edit/:id"  element={<view/>}/>
                    <Route exact path="/view/:id"  element={<edit/>}/>
                 </Routes>
      </BrowserRouter>
  )
}
export default Router;