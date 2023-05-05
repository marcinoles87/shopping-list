import React, { useState } from 'react'
import './item.css'


const Item = (props) => {
    let { value  ,  setAll , quantity ,setQuantity  } = props


    

    const [pieces , setPieces] = useState(0)

    const setIncresse = (index) => {
        
        setPieces(
          quantity = pieces +1
        )

        setAll(
             quantity
        )

        setQuantity(
            quantity
        )
    }

    const setDecresse = () => {
        setPieces(
            quantity = pieces -1
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