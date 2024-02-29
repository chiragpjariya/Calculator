

import { useState } from 'react'
import './App.css'

function App() {

  let [result, Setresult] = useState();


  let opration = (e) => {
    Setresult(result += e.target.name);
  }

  let Output = () => {
      Setresult(eval(result))
  }
  let Clear = () => {
    Setresult("")
  }
  let backspace = () => {
    Setresult(result.slice(0, -1))
  }



  return (
    <>
      <div className="container">
        <div className="displayData">
          <input type="text" readOnly id="display" value={result} />
        </div>
        <div className="btns grid">

          <button className='btn' name='1' onClick={opration} >1</button>
          <button className='btn' name='2' onClick={opration} >2</button>
          <button className='btn' name='3' onClick={opration} >3</button>
          <button className='btn' name='4' onClick={opration} >4</button>
          <button className='btn' name='5' onClick={opration} >5</button>
          <button className='btn' name='6' onClick={opration} >6</button>
          <button className='btn' name='7' onClick={opration} >7</button>
          <button className='btn' name='8' onClick={opration} >8</button>
          <button className='btn' name='9' onClick={opration} >9</button>
          <button className='btn' name='0' onClick={opration} >0</button>
          <button className='btn' onClick={Output} >=</button>
          <button className='btn' name='Cal' onClick={Clear} >Cal</button>
          <button className='btn' name='+' onClick={opration} >+</button>
          <button className='btn' name='-' onClick={opration} >-</button>
          <button className='btn' name='*' onClick={opration} >*</button>
          <button className='btn' name='/' onClick={opration}  >/</button>
          <button className='btn highlight' name='C' onClick={backspace} >C</button>


        </div>
      </div>
    </>
  )
}

export default App
