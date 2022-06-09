import * as React from "react";
import { useForm } from "react-hook-form";
    export default function Form() {
        const { register, handleSubmit } = useForm({
            user: {
                user_name: "",
                password: "",
                telephone_number: "",
                birth_date: "",
                gender: "",
                first_name: "",
                last_name: ""
            }
        });
config
        return (
            <form onSubmit={handleSubmit(console.log)}>
                <input {...register("user_name", { required: true })} placeholder="User Name" />
                <br/>
                <input {...register("telephone_number", { minLength: 2 })} placeholder="telephone_number" />
                <br/>

                <input {...register("birth_date", { minLength: 2 })} placeholder="birth_date" />
                <br/>

                <input {...register("first_name", { minLength: 2 })} placeholder="first_name" />

                <br/>
                <input {...register("last_name", { minLength: 2 })} placeholder="last_name" />
                <br/>

                <select {...register("gender")}>
                    <option value="">Select...</option>
                    <option value="A">Male</option>
                    <option value="B">Female </option>
                </select>


                <input type="submit" onClick={handleSubmit}  />
            </form>
        );
    }
