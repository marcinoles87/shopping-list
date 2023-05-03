
import './App.css';
import React , {useState} from 'react';
import Item from './components/Item';

 const App = () => {

  
  let [itemOn , setItemOn] = useState([])
  let [all , setAll] = useState()
  let [total , setTotal] = useState(0)
  let [inputValue , setInputValue] = useState('')

  
  const handleonClick = () => {

    setItemOn([...itemOn ,
      {
        value : total,
        totalItem : setAll , 
        all : all
      }])

    console.log(itemOn)


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
      {/* <Item 
        value = {total}
        totalItem ={setAll}
        all={all}
      ></Item> */}
    {itemOn.map( (item , index) => {
      return( <Item
      key = {index}
      value = {total}
      ></Item>)}
    )}


    </div>
      <p>Total : {all}</p>

    </div>
  );
}

export default App;
