import SpoonContext from "./SpoonContext"
import { useState } from "react"

const SpoonProvider = ({children}) => {
 const [spoons, setSpoons] = useState([])

 let contextValues = {
  spoons,
  setSpoons
 }

 return (
 <SpoonContext.Provider value={contextValues}>
  {children}
 </SpoonContext.Provider>
 )
}

export default SpoonProvider