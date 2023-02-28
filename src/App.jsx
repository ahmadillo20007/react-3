
import { useState } from 'react';
import './App.css';

function App() {
  const [test,setTest] = useState('')
  setTimeout(()=>{
    setTest(true)
  },2000)
  const [test2,setTest2] = useState(false)
  setTimeout(()=>{
    setTest(true)
  },2000)
  const [test1,setTest1] = useState('')
  return (
    
    <div className="App">
  <div className="container">

<div className={test ? 'box1': 'box2'}>

</div>
<input type="text" placeholder='text..' onChange={(e=> setTest(e.target.value.trim()))} />
<h1>{test.length ? 'bor' :'yoq'}</h1>


<input type="text" placeholder='text..' className={test1?'green':'red'} onChange={(e)=> setTest1(e.target.value.trim().length >8)} />

    </div>
</div>
  );
} 

export default App;
