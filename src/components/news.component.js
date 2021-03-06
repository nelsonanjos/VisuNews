import React from 'react';

const News = props => {

    const {
        title,
        text = [],
    } = props;

    return (
        <div>
            <div id="news-title">
                <h1>{title}</h1>
            </div>
            <hr />
            <div id="news-text">
                {text.map((t, i) => (
                    <p key={i}>{t}</p>
                ))}
            </div>
        </div>
    )
};

export default News;