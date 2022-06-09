import List from "../pages/List";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";

const Lista = () => {
    return(
    <Container fluid>
        <section className="user-search">
            <div className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-center">List Users</h1>
                            <Link to={"/postUser"} className="btn btn-primary text-center ms-2">Add</Link>
                            <List/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Container>
    )

}

export default Lista;