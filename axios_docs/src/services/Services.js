import axios from "axios";
let url = "http://127.0.0.1:3003";

export class Services {

    static server = axios.create({
        baseURL: url,
        timeout: 1000,
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "text/html"
        }
    })


    static getAllUsers(){
        let dataUrl = url +`/users` ;
        return axios.get(dataUrl)
    }
    static getAllRecipes(){
        let dataUrl = url + "/recipes"

    }
    static postUser (){
        let dataUrl = url + `/users`;
        return (dataUrl)
    }
    static  editUser() {
        let dataUrlUser = `${this.server}/edit/${this.editUser.id}`;
        return axios.get(dataUrlUser);

    }
}
export default Services;