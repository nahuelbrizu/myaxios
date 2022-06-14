import React from "react"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from "../components/containers/App";
import NavBar from "../components/component/NavBar/NavBar";
import Lista from "../components/containers/Lista";
import PostRecipes from "../components/axios/PostRecipes";
import PostUser from "../components/axios/PostUser";
import ViewId from "../components/pages/ViewId"
import Edit from  "../components/pages/Edit"

const Router = () => {
  return(
      <BrowserRouter>
            <NavBar />
                <Routes >
                  <Route exact path="/Lista" element={<Lista />} />
                  <Route exact path="/App" element={<App/>} />
                  <Route exact path="/PostRecipes"  element={<PostRecipes/>}/>
                    <Route exact path="/PostUser"  element={<PostUser/>}/>
                    <Route exact path={`/edit/`}  element={<ViewId/>}/>
                    <Route exact path="/viewId/"  element={<Edit/>}/>
                 </Routes>
      </BrowserRouter>
  )
}
export default Router;