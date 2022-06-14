import React, {useState} from "react";
import Spinner from "../component/Spinner/Spinner";

const Edit = () => {
    let [state, setState] = useState({
        loading : false,
        User : {
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
            User: {
                ...state.User,
                [event.target.name] : event.target.value
            }
        })
    }
    let {loading, User, errorMessage} = state;
    return(
        <React.Fragment> {

            loading ? <Spinner /> :
                <React.Fragment>
            <section className="edit-user p-3">
                <div className="container-edit ">
                    <div className="row">
                        <div className="col">
                            <p className="h4 text-success fw-bold">create User</p>
                            <p className="fst-italic"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eius eveniet, excepturi fugiat fugit labore magni officiis quisquam suscipit velit. Asperiores, cumque deleniti dicta facere nulla omnis quod recusandae unde?</p>
                        </div>
                    </div>
                    <div className="row">
                        <div  className="col">
                            <form >
                                <div className="mb-3">
                                    <input
                                        name="user_name"
                                        value={User.user_name}
                                        onChange={updateInput}
                                        type="text" className="form-control" id="user_name" placeholder="user_name"/>
                                </div>
                                <div className="mb-3">
                                    <input
                                        name={"password"}
                                        value={User.password}
                                        onChange={updateInput}
                                        type="password" className="form-control" id="exampleInputPassword1" placeholder={"*******"}/>
                                </div>
                                <div className="mb-3 mb-1-sm">
                                    <input name="first_name"
                                           value={User.first_name}
                                           onChange={updateInput}
                                           type="text" className="form-control" placeholder="first_name"/>
                                </div>
                                <div className="mb-3">
                                    <input name="last_name"
                                           value={User.last_name}
                                           onChange={updateInput}
                                           type="text" className="form-control" placeholder={"Brizuela"}/>
                                </div>
                                <div className="mb-3">
                                    <input name="telephone_number"
                                           value={User.telephone_number}
                                           onChange={updateInput}
                                           type="number" className="form-control" placeholder={"1234567890"} />
                                </div>
                                <div className="mb-3">
                                    <input name="email"
                                           value={User.email}
                                           onChange={updateInput}
                                           type="text" className="form-control" placeholder={"Email@email.com"}/>
                                </div>
                                <div className="mb-3">
                                    <input name="birth_date"
                                           value={User.birth_date}
                                           onChange={updateInput}
                                           type="date" className="form-control" placeholder={"mm/dd/yyyy"}/>
                                </div>
                                <div className="mb-3">
                                    <input name="gender"
                                           value={User.gender}
                                           onChange={updateInput}
                                           type="text" className="form-control" placeholder={"No Binary"}/>
                                </div>
                                <div>
                                    <button onSubmit={""}>Enviar</button>
                                    <button onSubmit={"/"}>cancelar</button>
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
export default Edit;