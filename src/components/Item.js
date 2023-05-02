import React, { useState } from 'react'
import './item.css'


const Item = () => {

    const [total , setTotal] = useState(0)


    return(
        <div className='item-card'>
            <input placeholder='add item...'/>
            <p>Total : {total}</p>
        </div>
    )
}

export default Item