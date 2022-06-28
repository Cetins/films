import React from "react";

const Film = ({name, url}) => {
    return (
        <li>
            <h3><a href={url}>{name}</a></h3>
        </li>
    )
};

export default Film;