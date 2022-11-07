import React from 'react'

function Header({number}) {
    console.log('Header component rendered');
  return (
    <div>
    <h1>Header - {number}</h1>
    <hr></hr>
        
    </div>
  )
}

export default React.memo(Header) 