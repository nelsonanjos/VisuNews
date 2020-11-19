import React from 'react';

const Image = props => {

    const {
        src,
        alt
    } = props;

    return (
        <div>
            <article id="img-news">
                <img src={src} alt={alt} />
            </article>
        </div>
    )
};

export default Image;