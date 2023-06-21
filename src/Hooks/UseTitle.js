
import { useEffect } from "react"


const useTitle = title =>{
    useEffect(()=>{
     document.title=`${title}_Toy Zone`
    },[title])
}

export default useTitle