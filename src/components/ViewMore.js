import React from "react";

const ViewMore = () => {
    const link = "https://www.imdb.com/calendar/?region=gb";
    const text = "View more upcoming releases >>"

    return (
        <div className="link">
            <h3><a href={link}>{text}</a></h3>
        </div>
    );
};

export default ViewMore;