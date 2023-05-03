
import './App.css';
import React , {useEffect, useState} from 'react';
import Item from './components/Item';

 const App = () => {

  
  let [itemOn , setItemOn] = useState([])
  let [all , setAll] = useState()
  let [total , setTotal] = useState(0)
  let [inputValue , setInputValue] = useState('')

  
  


      const addItem = (e) => {
        e.preventDefault()

        setItemOn([...itemOn ,
          {
            value : inputValue,
            key : itemOn.length,
            
            
          }])
    
        console.log(itemOn)
        console.log(inputValue)
          
        
        setTotal(
          total = inputValue
        )

        setInputValue(
          inputValue = ''
        )
      }
  

  const handleOnChange = (e) => {
    e.preventDefault()
    setInputValue(
      inputValue = e.target.value
    )

    
   }

  return (
    <div className="App">
      <h1>Shopping list App</h1>

      <div className='i'>
        <input onChange={handleOnChange} placeholder='add item...' value={inputValue}/>
        <button onClick={addItem}> Add Item</button>
      </div>

    <div>
     
    {itemOn.map( (item) => {
      return( <Item

      value = {item.value}
      key = {item.key}
      totalItem = {setAll}
      
      ></Item>)}
    )}


    </div>

      <p>Total : {all}</p>

    </div>
  );
}


export default App;
