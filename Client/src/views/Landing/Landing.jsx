import React from "react";
import { Link } from "react-router-dom";

export function Landing (){

    return (
        <div>
            <h1>Welcome to my portofolio</h1>
            <Link to="/home">Home</Link>
        </div>
    )
}