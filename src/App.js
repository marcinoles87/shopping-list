
import './App.css';
import React , {useState} from 'react';
import Item from './components/Item';

 const App = () => {

  

  let [all , setAll] = useState()
  let [total , setTotal] = useState(0)
  let [inputValue , setInputValue] = useState('')

  
  const handleonClick = () => {
    setTotal(
      total = inputValue
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
        <input onChange={handleOnChange} placeholder='add item...'/>
        <button onClick={handleonClick}> Add Item</button>
      </div>

    <div>
      <Item 
        value = {total}
      ></Item>
    </div>
      <p>Total : {}</p>

    </div>
  );
}

export default App;
