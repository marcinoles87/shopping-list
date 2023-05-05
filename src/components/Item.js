import React, { useState } from 'react'
import './item.css'


const Item = (props) => {
    let {value ,  setAll , all} = props


    const [pieces , setPieces] = useState(0)

    const setIncresse = () => {
        setPieces(
            pieces + 1
        )

        setAll(
            all = pieces+1
        )
    }

    const setDecresse = () => {
        setPieces(
            pieces - 1
        )

        setAll(
            all = pieces - 1
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