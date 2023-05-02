import React, { useState } from 'react'
import './item.css'


const Item = (props) => {
    let {value} = props
  


    return(
        <div className='item-card'>
           <p>{value}</p>
        </div>
    )
}

export default Item