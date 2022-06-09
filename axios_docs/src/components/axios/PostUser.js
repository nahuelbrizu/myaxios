import React, {useState} from "react"
import Form from "react-bootstrap/Form";
import {Container} from "react-bootstrap";

const PostUser = () => {
    let axios = require('axios');
    let [state, setState] = useState({
       loading : false,
       user : {
           "user_name": "",
           "password": "",
           "telephone_number": "",
           "birth_date": "",
           "gender": "",
           "first_name": "",
           "last_name": ""
       },
        errorMessage: ""
    });

    let config = {
        method: 'post',
        url: 'http://127.0.0.1:3003/users',
        headers: {
            'Content-Type': 'application/json'
        },
        maxRedirects: 0,
        data : JSON.stringify(setState.user)
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

    let updateInput = (event) =>{
        setState({
            ...state,
            user: {
                ...state.user,
                [event.target.user_name] : event.target.value
            }
        })
    }
    return(
        <React.Fragment>
            <pre>{JSON.stringify(state.user)}</pre>
        <Container maxWidth="sm">
            <div>
                <Form onSubmit={""}>
                    <div className="mb-1">
                        <label  className="form-label">User Name</label>
                        <input type="text" class="form-control" placeholder={"Nahuel-Zan"}/>
                    </div>
                    <div className="mb-1">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-1 mb-1-sm">
                        <label className="form-label">First Name</label>
                        <input name="name" type="text" className="form-control" placeholder={"Nahuel"}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" placeholder={"Brizuela"}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">telephone</label>
                        <input type="number" className="form-control" placeholder={"1234567890"} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" placeholder={"Email@email.com"}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label me-auto">Birthdate</label>
                        <input type="date" className="form-control" placeholder={"mm/dd/yyyy"}/>
                    </div>
                    <div className="mb-3">
                        <label className={"form-label"}>Select Your Gender</label>
                        <input type="text" className={"form-control"} placeholder="Female/Male"/>
                    </div>
                    <div>
                        <button onSubmit={""}>Enviar</button>
                        <button onSubmit={"/"}>cancelar</button>
                    </div>
                </Form>
            </div>
        </Container>
        </React.Fragment>
    )

}

export default PostUser;
