import React from 'react';

const Image = props => {

    const {
        src,
        alt
    } = props;

    return (
        <>
            <article id="img-news">
                <img src={src} alt={alt} />
            </article>
        </>
    )
};

export default Image;