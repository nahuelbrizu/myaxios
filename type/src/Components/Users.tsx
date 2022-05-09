import React from "react";

// @ts-ignore
export default function Users({     users }) {
    if (users.length === 0) return null;
    return (
        <>
            <h2>Lista de users</h2>
            <ul>
                {users.map((user: any) => {
                    const { id, user_name } = user;
                    return <li key={id}>{user_name}</li>;
                })}
            </ul>
        </>
    );
}