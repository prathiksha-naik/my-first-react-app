import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleUserDetails() {
    const params = useParams();

    return (
        <div className="App">
            <h1>User details for {params.id}</h1>
            <table>
                <h4>User privileges given to {params.id} are:</h4>
                <FunctionalComponent></FunctionalComponent>
            </table>
        </div>
    );
}

const FunctionalComponent = () => {
    return (
        <React.Fragment>
                <li>Read</li>
                <li>Write</li>
                <li>Delete</li>
                <li>Modify</li>
        </React.Fragment>
    )
}

export default SingleUserDetails;