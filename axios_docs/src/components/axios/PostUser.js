import React, {useState} from "react"
import Spinner from "../component/Spinner/Spinner";
import Services from "../../services/Services";
import qs from "qs"
import data from "bootstrap/js/src/dom/data";
const PostUser = () => {
    let [state, setState] = useState({
        loading : false,
        user : {
            user_name: "",
            password: "",
            email: "",
            telephone_number: "",
            birth_date: "",
            gender: "",
            first_name: "",
            last_name: ""

        },
        errorMessage: ""
    });


    let updateInput = (event) =>{
        setState({
            ...state,
            user: {
                ...state.user,
                [event.target.name] : event.target.value
            }
        });
    };

    let {loading, user, errorMessage} = state;

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
                    user:{
            user_name: user.user_name,
            password: user.password,
            email: user.email,
            telephone_number: user.telephone_number,
            birth_date: user.birth_date,
            gender: user.gender,
            first_name: user.first_name,
            last_name: user.last_name
                    }
        };

        const axios = require('axios');
        const params = new URLSearchParams(user);
        const options =  {
            method: "post",
            headers: {
                Accept: "application/json, text/plain, */*",
                'content-type': 'application/x-www-form-urlencoded'
            },
            params: params,
            data: qs.stringify(payload),
            url: Services.postUser(),
        };
        axios(options);

    }

    return(
        <React.Fragment>
            <pre>{JSON.stringify(state.user)}</pre>            {
            loading ? <Spinner /> :
                <React.Fragment>
                    <section className="add-user p-3">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p className="h4 text-success fw-bold">create user</p>
                                    <p className="fst-italic"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eius eveniet, excepturi fugiat fugit labore magni officiis quisquam suscipit velit. Asperiores, cumque deleniti dicta facere nulla omnis quod recusandae unde?</p>
                                </div>
                            </div>
                            <div className="row">
                                <div  className="col">
                                    <form  onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <input
                                                name="user_name"
                                                value={user.user_name}
                                                onChange={updateInput}
                                                type="text" className="form-control" id="user_name" placeholder="user_name"/>
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                name={"password"}
                                                value={user.password}
                                                onChange={updateInput}
                                                type="password" className="form-control" id="exampleInputPassword1" placeholder={"*******"}/>
                                        </div>
                                        <div className="mb-3 mb-1-sm">
                                            <input name="first_name"
                                                   value={user.first_name}
                                                   onChange={updateInput}
                                                   type="text" className="form-control" placeholder="first_name"/>
                                        </div>
                                        <div className="mb-3">
                                            <input name="last_name"
                                                   value={user.last_name}
                                                   onChange={updateInput}
                                                   type="text" className="form-control" placeholder={"Brizuela"}/>
                                        </div>
                                        <div className="mb-3">
                                            <input name="telephone_number"
                                                   value={user.telephone_number}
                                                   onChange={updateInput}
                                                   type="number" className="form-control" placeholder={"1234567890"} />
                                        </div>
                                        <div className="mb-3">
                                            <input name="email"
                                                   value={user.email}
                                                   onChange={updateInput}
                                                   type="text" className="form-control" placeholder={"Email@email.com"}/>
                                        </div>
                                        <div className="mb-3">
                                            <input name="birth_date"
                                                   value={user.birth_date}
                                                   onChange={updateInput}
                                                   type="date" className="form-control" placeholder={"mm/dd/yyyy"}/>
                                        </div>
                                        <div className="mb-3">
                                            <input name="gender"
                                                   value={user.gender}
                                                   onChange={updateInput}
                                                   type="text" className="form-control" placeholder={"No Binary"}/>
                                        </div>
                                        <div className={"mb-2"}>
                                            <button type="submit"  onClick={"/lista"}>Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

                </React.Fragment>
        }
        </React.Fragment>
    )

}

export default PostUser;
