import React, { useState } from 'react'
import './item.css'


const Item = (props) => {
    let {value ,  setAll , quantity} = props


    const [pieces , setPieces] = useState(0)

    const setIncresse = () => {
        setPieces(
            quantity++
        )

        setAll(
            quantity
        )
    }

    const setDecresse = () => {
        setPieces(
            quantity--
        )

        setAll(
            quantity
        )
    }

    return(
        
        <div className='item-card'>
            
           <p>{value}</p>
           <button onClick={setIncresse}>+</button>
           <button onClick={setDecresse}>-</button>
           <p>Pices : {pieces} </p>
            
        </div>
    )
}

export default Item