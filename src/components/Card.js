import React from "react";

export default function Card(props) {
    return (
        <>
        <h3>props.name</h3>
        `ID: ${props.id}    Email: ${props.email}`
        </>
    );
}