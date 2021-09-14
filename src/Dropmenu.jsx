import React  from 'react'

const Dropmenu = ({dropItem,setDropItem,setItem,item}) => {
    
    const changeHandler = (e)=>{
        e.preventDefault();
        if(!item.haveSelected){
            setDropItem(prevState => prevState.map((list)=>{
                if(list.value===e.target.value){
                    return {...list, selectedBy: item.id}
                }
                return list;
            }))
            setItem({...item,value:e.target.value, haveSelected:true});
        }else{
            setDropItem(prevState => prevState.map((list)=>{
                if(list.value===e.target.value){
                    return {...list, selectedBy: item.id}
                }
               if(list.value===item.value){
                   return {...list, selectedBy: 0}
               }
                return list;
            }))
            setItem({...item,value:e.target.value, haveSelected:true});
        }
    }
    return (
        <div className="dropdown">
            <label htmlFor="item-select" className="text">Choose a Item:</label>
            <select  id="item-select" className="optionSelect" onChange={changeHandler}>
                <option value="">--Please choose an option--</option>
                {
                    dropItem.map((optionItem)=>{
                        return (
                           (optionItem.selectedBy===item.id || optionItem.selectedBy===0 ) &&
                            <option 
                               key={optionItem.id} 
                               value={optionItem.value} 
                               className={`${optionItem.selectedBy===item.id? 'active': null }`}
                            >{optionItem.value}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Dropmenu