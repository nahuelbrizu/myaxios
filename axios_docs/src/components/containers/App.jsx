import React from "react";
import { Container } from "react-bootstrap";
import ListRecipes from "../pages/ListRecipes";
import {Link} from "react-router-dom";
import List from "../pages/List";


const App = () => {

    return(
        <Container fluid>
            <section className="user-search">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <h1 className="text-center">List Users</h1>
                                <Link to={"/postRecipes"} className="btn btn-primary ms-2 text-center">Add</Link>
                                <ListRecipes/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>

    )
}
export default App;