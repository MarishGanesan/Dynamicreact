import {useState} from 'react'
import './App.css'
function App(){
  const[count,setCount] = useState(0);
  return(
   <> <button onClick={()=>setCount((count)=>count+1)}>
Enter your count
</button>
<h1> count is {count} </h1>
</>
  )
}
export default App