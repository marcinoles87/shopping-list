
import './App.css';
import React , {useEffect, useState} from 'react';
import Item from './components/Item';

 const App = () => {

  
  let [itemOn , setItemOn] = useState([])
  let [all , setAll] = useState()
  let [total , setTotal] = useState(0)
  let [inputValue , setInputValue] = useState('')
  let [quantity , setQuantity] = useState(0)
 
  
  


      const addItem = (e) => {
        e.preventDefault()


        setItemOn([...itemOn ,
          {
            value : inputValue.toUpperCase(),
            key : itemOn.length,
            quantity : quantity
            
            
          }])
          
        setTotal(total = inputValue)
        setInputValue(inputValue = '')
      }
  

  const handleOnChange = (e) => {
    e.preventDefault()
    setInputValue(
      inputValue = e.target.value
    ) 
   }

   console.log(itemOn)
   
  return (
    <div className="App">
      <h1>Shopping list App</h1>

      <div className='i'>
        <input onChange={handleOnChange} placeholder='add item...' value={inputValue}/>
        <button onClick={addItem}> Add Item</button>
      </div>

    <div>
     
    {itemOn.map( (item ,index) => {
     
      return(
        <Item
      index = {index}
      value = {item.value}
      key = {item.key}
      setAll = {setAll}
      quantity = {item.quantity}
      setQuantity = {setQuantity}
      setItemOn = {setItemOn}
      itemOn = {itemOn}
      ></Item>
      )}
    )}

      
    </div>

      <p>Total item: {all} </p>

    </div>
  );
}


export default App;
