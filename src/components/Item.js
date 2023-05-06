import React, { useState } from 'react'
import './item.css'


const Item = (props) => {
    let { index ,value  ,  setAll , quantity ,setQuantity , setItemOn , itemOn } = props

    let [pieces , setPieces] = useState(0)

    const setIncresse = (index) => {
       
        const newItems = [...itemOn]
        newItems[index].quantity++

        // setPieces(
        //   quantity = pieces +1
        // )

        setAll(
             quantity
        )

    }

    

    const setDecresse = (index) => {

        const newItems = [...itemOn]
        newItems[index].quantity--

        setAll(
             quantity
        ) 
    }

    return(
        
        <div className='item-card'>
            
           <p>{value}</p>
           <button onClick={ () => setIncresse(index)}>+</button>
           <button onClick={ () => setDecresse(index)}>-</button>
           <p>Pices : {quantity} </p>
            
        </div>
    )
}

export default Item