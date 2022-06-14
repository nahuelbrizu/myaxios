import axios from "axios";

export class Services {
    static serverUrl= axios.create("http://localhost:3003", );

    static getAllUsers(){
        let dataUrl =`${this.serverUrl}/users`;

        return axios.get(dataUrl)
    }
    static postUser(){
        let dataUrl =`${this.serverUrl}/users`;
        return axios.post(dataUrl)
    }
    static  getUser() {
        let dataUrlUser = `${this.serverUrl}/edit/${this.getUser.id}`;
        return axios.get(dataUrlUser);

    }
}