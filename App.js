
import { useState } from 'react';

function App() {
   const [todo,settodo] = useState([]);
    const [inputvalue,setinputvalue] = useState("");

    const handlechange=(e)=>{
      setinputvalue(e.target.value);

    }
    const handleclick=(e)=>{
      e.preventDefault();
      settodo([...todo,inputvalue])
      setinputvalue('');
    }


  return (
    <>
    <input type='text' value={inputvalue} onChange={handlechange}/>
    <button onClick={handleclick}>ADD</button>
    
      <ul>
        
          {
          todo.map((val)=>{
            return(
              <li>{val}</li>
            )
            
          })
        }
                

      </ul>
    
    </>
    
  );
}

export default App;
