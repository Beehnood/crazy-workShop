import { createContext , useState } from "react";
import { locations } from "../layout/locations";


 export const LocationContext = createContext(null);

 export const LocationContextProvider = (props)=> {
    const [locationItems , setLocationItems] = useState ([])
   



    const addToCompt = (itemId) => {
        if(!locationItems?.find((item)=> item.id ===itemId))
        setLocationItems([...locationItems  , {id: itemId , count: 1}])
    else 
    setLocationItems(locationItems.map((item)=>{
        
        if( item.id === itemId)
        return {...item , count : item.count + 1}
        else 
        return item

    }))
    console.log(addToCompt)

    }
  const removeFromCompt = (itemId) =>{
        setLocationItems(locationItems.map ((i)=>{
            if(i.id === itemId)
            return {...i , count : i.count - 1}
        else return i
        }))

    }
    const contextValue = {locationItems, addToCompt, removeFromCompt}
    return (
        <LocationContext.Provider value={contextValue}>{props.children}</LocationContext.Provider>
    )

 }


