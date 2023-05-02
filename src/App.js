
import './App.css';
import React , {useState} from 'react';
import Item from './components/Item';

 const App = () => {

  const [total , setTotal] = useState(0)
  const [inputValue , setInputValue] = useState('')

  
  const handleonClick = () => {
    setTotal(
      total 
    )
  }
  return (
    <div className="App">
      <h1>Shopping list App</h1>

      <div className='i'>
        <input placeholder='add item...'/>
        <button> Add Item</button>
      </div>

      <Item></Item>

      <p>Total : {total}</p>

    </div>
  );
}

export default App;
