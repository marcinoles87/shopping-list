import React, { useState } from 'react'
import './item.css'


const Item = (props) => {
    let { index ,value  ,  setAll , quantity ,setQuantity , setItemOn , itemOn } = props

    let [pieces , setPieces] = useState(0)

    const setIncresse = () => {
        const newItem = [...itemOn].quantity+1
        console.log(newItem)
        setItemOn([...itemOn ,
            {
              
             
              quantity : quantity++
              
              
            }])
        
        console.log(index)

        setPieces(
          pieces = pieces+1
        )

        setAll(
             quantity
        )

        setQuantity(
            pieces
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