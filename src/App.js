
import './App.css';
import React, {  useState } from 'react'
import Dropmenu from './Dropmenu';

const initialState  = [
   {value: 'A', id: 1, selectedBy: 0},
   {value: 'B', id: 2, selectedBy: 0},
   {value: 'C', id: 3, selectedBy: 0},
   {value: 'D', id: 4, selectedBy: 0},
   {value: 'E', id: 5, selectedBy: 0}
]
const dropState={
  id: undefined,
  value:'',
  haveSelected:false
}
function App() {
  const [submitting, setSubmitting] = useState(false);
  const [dropItem,setDropItem] = useState(initialState);
  const [item1, setItem1]= useState({...dropState,id:1});
  const [item2, setItem2]= useState({...dropState,id:2});
  const [item3, setItem3]= useState({...dropState,id:3});
 
  const clearHandler=()=>{
       setDropItem(initialState);
       setSubmitting(false)
       setItem1({id:1, value:'', haveSelected:false});
       setItem2({id:2, value:'', haveSelected:false});
       setItem3({id:3, value:'', haveSelected:false});
  }

  
  const submitHandler =(e)=>{
    e.preventDefault();
    if(item1.value==='' || item2.value==='' || item3.value==='') return alert('Please selected items from each dropDown')
    alert('Succesfully selected')
    setSubmitting(true);
  }
  
  return (
    <>
      <div className="App" >
          <form className="form" onSubmit={submitHandler}>
              <Dropmenu dropItem={dropItem} setDropItem={setDropItem} setItem={setItem1} item={item1}  />
              <Dropmenu dropItem={dropItem} setDropItem={setDropItem} setItem={setItem2} item={item2} />
              <Dropmenu dropItem={dropItem} setDropItem={setDropItem} setItem={setItem3} item={item3} />
               <div className="buttonGroup">
                  <button type="submit" className="btn" >submit</button>
                  <button type="button" className="btn clearButton" onClick={clearHandler}>Clear</button>
               </div>
          </form>
          
      </div>
      <div>
     
      {submitting &&
       <div>
          <h4 className="text">You submiited the Following info</h4>
          <p className="text">By DropDown 1: {item1.value}</p>
          <p className="text">By DropDown 2: {item2.value}</p>
          <p className="text">By DropDown 3: {item3.value}</p>
       </div>
      }
      </div>
      
    </>
  );
}

export default App;
