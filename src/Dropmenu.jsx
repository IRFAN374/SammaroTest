import React  from 'react'

const Dropmenu = ({dropItem,setDropItem,setItem,item}) => {
    
    const changeHandler = (id,value)=>{
        if(item==='')setDropItem(prevState=> prevState.filter(x=> x.id!==id) )
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