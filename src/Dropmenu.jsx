import React  from 'react'

const Dropmenu = ({dropItem,setDropItem,setItem}) => {
    
    const changeHandler = (id,value)=>{
       
        console.log("i am called: ", id, value)
        setDropItem(prevState=> prevState.filter(x=> x.id!==id) )
        setItem(value)
    }
    return (
        <div className="dropdown">
            <button className="dropbtn">Dropdown</button>
            <div className="dropdown-content">
                <ul>
                    {dropItem.map((item)=>{
                      return <li key={item.id} type="button"   onClick={()=> changeHandler(item.id,item.value)} >{item.value}</li>
                    }
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Dropmenu


// return <li key={item.id} type="button" value={item.id} onClick={()=>setDropItem(prevState=> prevState.filter(x=> x.id!==item.id) )} >{item.value}</li>