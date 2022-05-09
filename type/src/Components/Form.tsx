import React from "react";
import { createUsers } from "../axios/index";

export default function Form() {

    const [pokemon, pokemonState] = React.useState({
        user_name: "",
        telephone_number: "",
        first_name: ""
    })

    const { user_name, telephone_number, first_name } = pokemon;

    function onChange(e: any) {
        pokemonState({
            ...pokemon,
            [e.target.name] : e.target.value
        })
    }

    function onSubmit(e:any) {
        e.preventDefault();
        if(user_name === "" || telephone_number === "" || first_name === "") {
            alert("No se aceptan valores vacios");
            return;
        }
        createUsers(pokemon);
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="user_name">user_name</label>
            <input
                type="text"
                id="user_name"
                name="user_name"
                onChange={onChange}
                placeholder="user_name del Pokemon"
            />
            <label htmlFor="telephone_number">telephone_number</label>
            <input
                type="text"
                id="telephone_number"
                name="telephone_number"
                onChange={onChange}
                placeholder="telephone_number del Pokemon"
            />
            <label htmlFor="first_name">first_name</label>
            <input
                type="text"
                id="first_name"
                name="first_name"
                onChange={onChange}
                placeholder="first_name del Pokemon"
            />
            <button type="submit">Crear</button>
        </form>
    );
}