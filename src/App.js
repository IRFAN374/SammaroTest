
import './App.css';
import React, {  useState } from 'react'
import Dropmenu from './Dropmenu';

const initialState  = [
   {value: 'A', id: 1, selected: false},
   {value: 'B', id: 2, selected: false},
   {value: 'C', id: 3, selected: false},
   {value: 'D', id: 4, selected: false},
   {value: 'E', id: 5, selected: false}
]
function App() {
  const [dropItem,setDropItem] = useState(initialState);
  const [item1, setItem1]= useState('');
  const [item2, setItem2]= useState('');
  const [item3, setItem3]= useState('');

  console.log("drop Item in app: ", dropItem);
  const clickHandler=()=>{
       if(item1==='' || item2==='' || item3==='') return alert('Please selected items from each dropDown')
       alert('Succesfully selected')
       setDropItem(initialState);
       setItem1('');
       setItem2('');
       setItem3('');
  }
  
  return (
    <>
      <div className="App">
          <Dropmenu dropItem={dropItem} setDropItem={setDropItem} setItem={setItem1} />
          <Dropmenu dropItem={dropItem} setDropItem={setDropItem} setItem={setItem2}/>
          <Dropmenu dropItem={dropItem} setDropItem={setDropItem} setItem={setItem3}/>
          <button type="button" className="btn" onClick={clickHandler}>submit</button>
      </div>
      <div>
        { item1!=='' && item2!=='' && item3!=='' && (
          <div>
            <h4>From First DropDown: {item1}</h4>
            <h4>From Second DropDown: {item2}</h4>
            <h4>From Third DropDown: {item3}</h4>
          </div>
        )
           
        }
      </div>
    </>
  );
}

export default App;
