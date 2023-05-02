import React, { useState } from 'react'
import './item.css'


const Item = (props) => {
    let {value} = props
  

    const [pieces , setPieces] = useState(0)

    return(
        <div className='item-card'>
           <p>{value}</p>
           <button>+</button>
           <button>-</button>
           <p>Pices : {pieces} </p>
        </div>
    )
}

export default Item