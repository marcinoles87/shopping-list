import React, { useState } from 'react'
import './item.css'


const Item = (props) => {
    let {value ,  setAll , quantity , all } = props


    const [pieces , setPieces] = useState(0)

    const setIncresse = () => {
        setPieces(
            quantity = pieces +1
        )

        setAll(
            all = quantity
        )
    }

    const setDecresse = () => {
        setPieces(
            quantity = pieces -1
        )

        setAll(
            all = quantity
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