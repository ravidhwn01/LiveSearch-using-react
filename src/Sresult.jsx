import React from 'react'

export default function Sresult(props) {
    // const imgs = `https://source.unsplash.com/user/${props.images}/400x200/`;
    const imgs = `https://source.unsplash.com/random/400x200/?${props.images}`;
  return (
    <>
        <div>
            <img src={imgs} alt="search" />
        </div>
        {/* ${props.images} */}
    </>
  )
}
