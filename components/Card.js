import React from 'react';
import Link from 'next/link';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <Link prefetch href={`/robotPage?id=${id}`} as={`robotPage/${id}`} >
          <div>
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;