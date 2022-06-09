import Form from 'react-bootstrap/Form'
import {Container} from "react-bootstrap";

const PostRecipes = () => {

return(
    <Container maxWidth="sm">
    <div>
    <Form onSubmit={""}>
        <div class="mb-3">
            <label  class="form-label">User Name</label>
            <input type="text" class="form-control" />
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="mb-3">
            <label className="form-label">Birthdate</label>
            <input type="date" className="form-control"/>
        </div>
        <div>
            <button onSubmit={""}>Enviar</button>
            <button onSubmit={"/"}>cancelar</button>
        </div>
    </Form>
     </div>
    </Container>
)
}

 export default PostRecipes;