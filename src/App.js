
import './App.css';
import React , {useState} from 'react';
import Item from './components/Item'

 const App = () => {
  const [total , setTotal] = useState(0)

  
  const handleonClick = () => {
    setTotal(
      total 
    )
  }
  return (
    <div className="App">
      <h1>Shopping list App</h1>
      <input placeholder='add item...'/>
      <Item></Item>

      <p>Total : {total}</p>

    </div>
  );
}

export default App;
