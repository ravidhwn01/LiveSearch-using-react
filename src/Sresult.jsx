import React from 'react'

export default function Sresult(props) {
    // <img src="https://source.unsplash.com/user/erondu/1600x900"></img>
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
