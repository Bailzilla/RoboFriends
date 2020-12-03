import React from 'react';

const Card = ({ name, email, id}) => {
    return (
        <div className='tc bg-light-grey dib br3 pa2 ma2 grow bw2 shadow-3'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;